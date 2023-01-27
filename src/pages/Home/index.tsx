import { HomeContainer, HomeProfile, PostCards, SearchInput } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Home() {
  console.log("Eu to aqui!");
  return (
    <HomeContainer>
      <HomeProfile>
        <img src="" alt="" />
        <div>
          <h1>Cameron Williamson</h1>
          <span>
            github <a href=""></a>
          </span>
        </div>
        <div>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <a href="">cameronwll</a>
            <a href="">Rocketseat</a>
            <a href=""> 32 seguidores</a>
          </div>
        </div>
      </HomeProfile>
    </HomeContainer>
  );
}
