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
  ImageProfile,
} from "./styles";

import ProfileImage from "../../../../assets/avatar.png";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface ProfileDatas {
  avatar: string;
  name: string;
  bio: string;
  urlProfile: string;
  profileTag: string;
  company: string;
  followers: number;
}

export function HomeProfile() {
  const [profileDatas, setProfileDatas] = useState<ProfileDatas[]>([]);

  async function fetchGitHubProfileDatas() {
    let profileDatas: ProfileDatas;
    const response = await api.get("/users/gomessgbr");
    profileDatas = {
      avatar: response?.data?.avatar_url,
      name: response?.data?.name,
      bio: response?.data?.bio,
      urlProfile: response?.data?.html_url,
      profileTag: response?.data?.login,
      company: response?.data?.company,
      followers: response?.data?.followers,
    };

    setProfileDatas((profile) => [...profile, profileDatas]);
  }

  useEffect(() => {
    fetchGitHubProfileDatas();
  }, []);

  return (
    <HomeProfileContainer>
      {profileDatas ? (
        profileDatas.map(
          ({
            avatar,
            name,
            bio,
            company,
            followers,
            urlProfile,
            profileTag,
          }) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <ImageProfile src={avatar} alt="Imagem do perfil" />
                <HomeProfileWrapper>
                  <HomeProfileTitle>
                    <h1>{name}</h1>
                    <a href={urlProfile}>
                      github{"    "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </HomeProfileTitle>
                  <HomeProfileSubtitle>
                    <p>{bio}</p>
                    <FooterSubtitleIcons>
                      <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>{profileTag}</span>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faBuilding} />
                        <span>{company ? company : `RocketSeat`}</span>
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <span> {followers} seguidores</span>
                      </div>
                    </FooterSubtitleIcons>
                  </HomeProfileSubtitle>
                </HomeProfileWrapper>
              </div>
            );
          }
        )
      ) : (
        <>
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
        </>
      )}
    </HomeProfileContainer>
  );
}
