import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FooterSubtitleIcons,
  HomeProfileContainer,
  HomeProfileSubtitle,
  HomeProfileTitle,
  HomeProfileWrapper,
} from "./styles";

import ProfileImage from "../../../../assets/avatar.png";

export function HomeProfile() {
  return (
    <HomeProfileContainer>
      <img src={ProfileImage} alt="Imagem do perfil" />
      <HomeProfileWrapper>
        <HomeProfileTitle>
          <h1>Cameron Williamson</h1>
          <span>
            github{"    "}
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
    </HomeProfileContainer>
  );
}
