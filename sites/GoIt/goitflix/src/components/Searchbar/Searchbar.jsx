import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchLabel,
  Container,
} from './Searchbar.styled';

export const Searchbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [search, setSearch] = useState(query ?? '');

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(search !== '' ? { query: search, page: 1 } : {});
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchLabel />
        </SearchButton>

        <SearchInput
          type="text"
          name="query"
          value={search}
          autocomplete="off"
          autoFocus
          placeholder="Search films"
          onChange={handleChange}
        />
      </SearchForm>
    </Container>
  );
};
