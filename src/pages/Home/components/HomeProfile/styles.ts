import styled from "styled-components";

export const HomeProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 13.25rem;
  max-width: 54rem;

  align-items: center;
  justify-content: center;
  margin-top: -5rem;

  border-radius: 10px;
  background: ${({ theme }) => theme["base-profile"]};
  color: ${({ theme }) => theme.white};

  img {
    margin: 2rem 2rem 2rem 2.5rem;
  }
`;

export const HomeProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeProfileTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19.32rem;

  h1 {
    color: ${({ theme }) => theme["base-title"]};
    font-weight: 700;
    line-height: 130%;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  span {
    color: ${({ theme }) => theme.blue};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
    margin-bottom: 1.25rem;
  }
`;

export const HomeProfileSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    color: ${({ theme }) => theme["base-text"]};
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
  }
`;

export const FooterSubtitleIcons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme["base-subtitle"]};
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    margin-left: 0.5rem;
  }
`;
