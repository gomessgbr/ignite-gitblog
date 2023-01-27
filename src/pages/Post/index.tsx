import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  PostContainer,
  PostTitleWrapper,
  PostContentWrapper,
  PostTitleHeaderIconsWrapper,
  PostTitleFooterIconsWrapper,
  PostTitleContentWrapper,
  PostContent,
} from "./styles";

export function Post() {
  return (
    <div>
      <PostContainer>
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
              <a href="">
                Ver No github{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ marginLeft: "0.505rem" }}
                />
              </a>
            </span>
          </PostTitleHeaderIconsWrapper>
          <PostTitleContentWrapper>
            <h1>JavaScript data types and data structures</h1>
            <PostTitleFooterIconsWrapper>
              <div>
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                  cameronwll
                </span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faCalendarDay} />
                  Rocketseat
                </span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon icon={faComment} />
                  32 seguidores
                </span>
              </div>
            </PostTitleFooterIconsWrapper>
          </PostTitleContentWrapper>
        </PostTitleWrapper>
        <PostContentWrapper>
          <PostContent>
            <p>
              <b>
                Programming languages all have built-in data structures, but
                these often differ from one language to another.
              </b>
              This article attempts to list the built-in data structures
              available in JavaScript and what properties they have. These can
              be used to build other data structures. Wherever possible,
              comparisons with other languages are drawn.
            </p>

            <a href="" style={{ color: "#3294F8" }}>
              Dynamic typing
            </a>
            <p>
              JavaScript is a loosely typed and dynamic language. Variables in
              JavaScript are not directly associated with any particular value
              type, and any variable can be assigned (and re-assigned) values of
              all types:
            </p>

            {/* <p>
              ```javascript 
              let foo = 42; // foo is now a number 
              foo = ‘bar’; //foo is now a string 
              foo = true; // foo is now a boolean 
              
              ```
            </p> */}
          </PostContent>
        </PostContentWrapper>
      </PostContainer>
    </div>
  );
}
