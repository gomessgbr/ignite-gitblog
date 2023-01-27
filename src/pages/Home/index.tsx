import {
  HomeContainer,
  HomeProfile,
  HomeProfileWrapper,
  HomeProfileTitle,
  HomeProfileSubtitle,
  FooterSubtitleIcons,
  SearchInputContainer,
  SearchInputTitleWrapper,
  SearchInput,
  PostCardsContainer,
  PostCardContent,
  PostCardContentTitle,
  PostCardContentSubTitle,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import ProfileImage from "../../assets/avatar.png";

export function Home() {
  return (
    <HomeContainer>
      <HomeProfile>
        <img src={ProfileImage} alt="Imagem do perfil" />
        <HomeProfileWrapper>
          <HomeProfileTitle>
            <h1>Cameron Williamson</h1>
            <span>
              github <a href=""></a>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </HomeProfileTitle>
          <HomeProfileSubtitle>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
            <FooterSubtitleIcons>
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <a href="">cameronwll</a>
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <a href="">Rocketseat</a>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <a href=""> 32 seguidores</a>
              </div>
            </FooterSubtitleIcons>
          </HomeProfileSubtitle>
        </HomeProfileWrapper>
      </HomeProfile>

      <SearchInputContainer>
        <SearchInputTitleWrapper>
          <span className="publics">Publicações</span>
          <span className="amountPublics">6 publicações</span>
        </SearchInputTitleWrapper>
        <SearchInput placeholder="Buscar conteúdo"></SearchInput>
      </SearchInputContainer>

      <PostCardsContainer>
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
