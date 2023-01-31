import { HomeContainer, PostCardsContainer } from "./styles";

import { HomeProfile } from "./components/HomeProfile";
import { Search } from "./components/Search";
import { PostCards } from "./components/PostCards";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface IPost {
  title: string;
  number: number;
  body: string;
  updated_at: string;
}
[];

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);

  async function fetchPosts() {
    const response = await api.get("/search/issues", {
      params: {
        q: "repo:gomessgbr/ignite-gitblog",
      },
    });

    const responseDatas = response.data.items;

    const postDatas: IPost[] = [];

    responseDatas.map(
      (post: {
        title: string;
        number: number;
        body: string;
        updated_at: string;
      }) => {
        const dateToDate = new Date(post.updated_at);
        const convertDate = formatDistanceToNow(dateToDate, {
          locale: ptBR,
          addSuffix: true,
        });

        const fetchDatas = {
          title: post.title,
          number: post.number,
          body: post.body,
          updated_at: convertDate,
        };

        return postDatas.push({ ...fetchDatas });
      }
    );

    setPosts(postDatas);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  let countPosts = posts.length;

  return (
    <HomeContainer>
      <HomeProfile />
      <Search amountOfPosts={countPosts} />
      <PostCardsContainer>
        {posts.map((post) => {
          return (
            <PostCards
              key={`${post.title}+${post.number}`}
              titlePost={post.title}
              bodyPost={post.body}
              numberPost={post.number}
              updated_at={post.updated_at}
            />
          );
        })}
      </PostCardsContainer>
    </HomeContainer>
  );
}
