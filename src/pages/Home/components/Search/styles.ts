import styled from "styled-components";

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
`;

export const SearchInputTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 42.44rem;

  .publics {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 160%;
    color: ${({ theme }) => theme["base-subtitle"]};
    margin-bottom: 0.75rem;
  }
  .amountPublics {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 160%;
    color: ${({ theme }) => theme["base-span"]};
    text-align: right;
    margin-top: 0.25rem;
    margin-bottom: 0.94rem;
  }
`;

export const SearchInput = styled.input`
  width: 54rem;
  height: 3.125rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};

  background: ${({ theme }) => theme["base-input"]};

  border: 1px solid ${({ theme }) => theme["base-border"]};
  border-radius: 6px;

  padding: 0.75rem 1rem;

  ::placeholder {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    color: ${({ theme }) => theme["base-label"]};
  }
`;
