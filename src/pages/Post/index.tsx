import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams, useLocation } from "react-router-dom";
import {
  PostContainer,
  PostTitleWrapper,
  PostContentWrapper,
  PostTitleHeaderIconsWrapper,
  PostTitleFooterIconsWrapper,
  PostTitleContentWrapper,
  PostContent,
} from "./styles";

interface IPostContent {
  postLink: string;
  title: string;
  content: string;

  comments: string;
  tagUser: string;
}

export function Post() {
  const [postContent, setPostContent] = useState<IPostContent[]>([]);
  let { number } = useParams();
  const { state } = useLocation();
  async function sendtoPostPage() {
    const response = await api.get(
      `/repos/gomessgbr/ignite-gitblog/issues/${number}`
    );

    const postFetched = [
      {
        postLink: response?.data?.html_url,
        title: response?.data?.title,
        content: response?.data?.body,

        comments: response?.data?.comments,
        tagUser: response?.data?.user.login,
      },
    ];

    setPostContent(postFetched);
  }

  useEffect(() => {
    sendtoPostPage();
  }, []);

  return (
    <div>
      {postContent &&
        postContent.map((content) => {
          return (
            <PostContainer key={content.postLink}>
              <PostTitleWrapper>
                <PostTitleHeaderIconsWrapper>
                  <Link to="/">
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      style={{ marginRight: "0.5rem" }}
                    />
                    Voltar
                  </Link>
                  <span>
                    <a href={content.postLink}>
                      Ver No github{" "}
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        style={{ marginLeft: "0.505rem" }}
                      />
                    </a>
                  </span>
                </PostTitleHeaderIconsWrapper>
                <PostTitleContentWrapper>
                  <h1>{content.title}</h1>
                  <PostTitleFooterIconsWrapper>
                    <div>
                      <span>
                        <FontAwesomeIcon icon={faGithub} />
                        {content.tagUser}
                      </span>
                    </div>
                    <div>
                      <span>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        {state.updated_at}
                      </span>
                    </div>
                    <div>
                      <span>
                        <FontAwesomeIcon icon={faComment} />
                        {content.comments} comentários
                      </span>
                    </div>
                  </PostTitleFooterIconsWrapper>
                </PostTitleContentWrapper>
              </PostTitleWrapper>
              <PostContentWrapper>
                <PostContent>
                  <p>{content.content}</p>
                </PostContent>
              </PostContentWrapper>
            </PostContainer>
          );
        })}
    </div>
  );
}
