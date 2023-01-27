import {
  HomeContainer,
  HomeProfile,
  HomeProfileWrapper,
  HomeProfileTitle,
  HomeProfileSubtitle,
  FooterSubtitleIcons,
  PostCards,
  SearchInput,
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
    </HomeContainer>
  );
}
