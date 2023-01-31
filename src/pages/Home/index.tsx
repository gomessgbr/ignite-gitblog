import {
  HomeContainer,
  SearchInputContainer,
  SearchInputTitleWrapper,
  SearchInput,
  PostCardsContainer,
  PostCardContent,
  PostCardContentTitle,
  PostCardContentSubTitle,
} from "./styles";

import { Link } from "react-router-dom";
import { HomeProfile } from "./components/HomeProfile";

export function Home() {
  return (
    <HomeContainer>
      <HomeProfile />
      <SearchInputContainer>
        <SearchInputTitleWrapper>
          <span className="publics">Publicações</span>
          <span className="amountPublics">6 publicações</span>
        </SearchInputTitleWrapper>
        <SearchInput placeholder="Buscar conteúdo"></SearchInput>
      </SearchInputContainer>

      <PostCardsContainer>
        <PostCardContent>
          <Link to="Post" title="Post">
            <PostCardContentTitle>
              <div style={{ maxWidth: "17.69rem" }}>
                <h1>JavaScript data types and data structures</h1>
              </div>

              <span>Há 1 dia</span>
            </PostCardContentTitle>
            <PostCardContentSubTitle>
              <p>
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in...{" "}
              </p>
            </PostCardContentSubTitle>
          </Link>
        </PostCardContent>

        <PostCardContent>
          <PostCardContentTitle>
            <div style={{ maxWidth: "17.69rem" }}>
              <h1>JavaScript data types and data structures</h1>
            </div>

            <span>Há 1 dia</span>
          </PostCardContentTitle>
          <PostCardContentSubTitle>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...{" "}
            </p>
          </PostCardContentSubTitle>
        </PostCardContent>
        <PostCardContent>
          <PostCardContentTitle>
            <div style={{ maxWidth: "17.69rem" }}>
              <h1>JavaScript data types and data structures</h1>
            </div>

            <span>Há 1 dia</span>
          </PostCardContentTitle>
          <PostCardContentSubTitle>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...{" "}
            </p>
          </PostCardContentSubTitle>
        </PostCardContent>
        <PostCardContent>
          <PostCardContentTitle>
            <div style={{ maxWidth: "17.69rem" }}>
              <h1>JavaScript data types and data structures</h1>
            </div>

            <span>Há 1 dia</span>
          </PostCardContentTitle>
          <PostCardContentSubTitle>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...{" "}
            </p>
          </PostCardContentSubTitle>
        </PostCardContent>
        <PostCardContent>
          <PostCardContentTitle>
            <div style={{ maxWidth: "17.69rem" }}>
              <h1>JavaScript data types and data structures</h1>
            </div>

            <span>Há 1 dia</span>
          </PostCardContentTitle>
          <PostCardContentSubTitle>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...{" "}
            </p>
          </PostCardContentSubTitle>
        </PostCardContent>
        <PostCardContent>
          <PostCardContentTitle>
            <div style={{ maxWidth: "17.69rem" }}>
              <h1>JavaScript data types and data structures</h1>
            </div>

            <span>Há 1 dia</span>
          </PostCardContentTitle>
          <PostCardContentSubTitle>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...{" "}
            </p>
          </PostCardContentSubTitle>
        </PostCardContent>
        <PostCardContent>
          <PostCardContentTitle>
            <div style={{ maxWidth: "17.69rem" }}>
              <h1>JavaScript data types and data structures</h1>
            </div>

            <span>Há 1 dia</span>
          </PostCardContentTitle>
          <PostCardContentSubTitle>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...{" "}
            </p>
          </PostCardContentSubTitle>
        </PostCardContent>
        <PostCardContent>
          <PostCardContentTitle>
            <div style={{ maxWidth: "17.69rem" }}>
              <h1>JavaScript data types and data structures</h1>
            </div>

            <span>Há 1 dia</span>
          </PostCardContentTitle>
          <PostCardContentSubTitle>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...{" "}
            </p>
          </PostCardContentSubTitle>
        </PostCardContent>
      </PostCardsContainer>
    </HomeContainer>
  );
}
