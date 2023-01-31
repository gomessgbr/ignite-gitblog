import {
  SearchInput,
  SearchInputContainer,
  SearchInputTitleWrapper,
} from "./styles";

interface SearchProps {
  amountOfPosts: number;
}

export function Search({ amountOfPosts }: SearchProps) {
  return (
    <SearchInputContainer>
      <SearchInputTitleWrapper>
        <span className="publics">Publicações</span>
        <span className="amountPublics">{`${amountOfPosts}`} publicações</span>
      </SearchInputTitleWrapper>
      <SearchInput placeholder="Buscar conteúdo"></SearchInput>
    </SearchInputContainer>
  );
}
