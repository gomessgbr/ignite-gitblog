import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeProfile = styled.div`
  color: ${({ theme }) => theme.white};
  h1 {
    color: ${({ theme }) => theme["base-title"]};
    font-weight: 700;
    line-height: 130%;
    font-size: 1.5rem;
  }
  span {
    color: ${({ theme }) => theme.blue};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
  }
  p {
    color: ${({ theme }) => theme["base-text"]};
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme["base-subtitle"]};
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
  }
`;

export const SearchInput = styled.input``;

export const PostCards = styled.div``;
