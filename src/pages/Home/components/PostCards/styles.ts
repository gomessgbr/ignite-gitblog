import styled from "styled-components";

export const PostCardContent = styled.div`
  width: 26rem;
  height: 16.25rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  background: ${({ theme }) => theme["base-post"]};

  border-radius: 10px;

  a {
    text-decoration: none;
  }
`;

export const PostCardContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 22rem;
  height: 4rem;
  margin-bottom: 1.25rem;
  gap: 1rem;

  h1 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 160%;
    color: ${({ theme }) => theme["base-title"]};
  }

  span {
    width: 4rem;

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 160%;
    color: ${({ theme }) => theme["base-span"]};
  }
`;

export const PostCardContentSubTitle = styled.div`
  max-height: 7rem;
  overflow-y: hidden;
  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: ${({ theme }) => theme["base-text"]};
  }
`;
