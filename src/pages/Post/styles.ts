import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PostTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 10.5rem;
  width: 54rem;
  background: ${({ theme }) => theme["base-profile"]};
  margin-top: -5rem;

  border-radius: 10px;
  gap: 1.25rem;
  padding: 2rem;
`;

export const PostTitleHeaderIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 38.625rem;
  a {
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
    text-transform: uppercase;

    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
  }
`;

export const PostTitleContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  gap: 0.5rem;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${({ theme }) => theme["base-title"]};
  }
`;

export const PostTitleFooterIconsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;

    color: ${({ theme }) => theme["base-span"]};
  }
`;

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 54rem;
  min-height: 27rem;
`;

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  /* p {
  } */
`;

export const PostContentBody = styled(ReactMarkdown)`
  color: ${({ theme }) => theme["base-text"]};
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
`;
