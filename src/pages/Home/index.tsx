import { HomeContainer, PostCardsContainer } from "./styles";

import { HomeProfile } from "./components/HomeProfile";
import { Search } from "./components/Search";
import { PostCards } from "./components/PostCards";
import { api } from "../../lib/axios";
import { ChangeEvent, useEffect, useState } from "react";
import { ConvertDate } from "../../utils/convertDate";

interface IPost {
  title: string;
  number: number;
  body: string;
  created_at: string;
}
[];

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [query, setQuery] = useState("");

  async function fetchPosts() {
    const response = await api.get(
      `search/issues?q=${
        query ? query : ""
      }%20repo:${"gomessgbr"}/ignite-gitblog`
    );

    setPosts(response.data.items);
  }

  useEffect(() => {
    fetchPosts();
  }, [query]);

  function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    fetchPosts();
  }

  let countPosts = posts.length;

  return (
    <HomeContainer>
      <HomeProfile />
      <Search amountOfPosts={countPosts} />
      {/* <input
        type="search"
        name=""
        id=""
        value={query}
        onChange={onChangeSearch}
      /> */}
      <PostCardsContainer>
        {posts.map((post) => {
          return (
            <PostCards
              key={`${post.title}+${post.number}`}
              titlePost={post.title}
              bodyPost={post.body}
              numberPost={post.number}
              created_at={ConvertDate(post.created_at)}
            />
          );
        })}
      </PostCardsContainer>
    </HomeContainer>
  );
}
