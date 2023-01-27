import { HeaderContainer } from "./styles";

import imageHeader from "../../assets/Cover.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={imageHeader} alt="" />
    </HeaderContainer>
  );
}
