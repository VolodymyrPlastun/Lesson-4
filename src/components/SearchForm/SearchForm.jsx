import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({onSubmit}) => {
  const [query, setQuery] = useState('');
  // state = {
  //   query: '',
  // };

 const handleInput = e => {
    setQuery(e.target.value);

    // this.setState({
    //   query: e.currentTarget.value,
    // });
  };

 const handleSubmit = e => {
    // const { query } = this.state;

    e.preventDefault();

    onSubmit(query);
setQuery('');
    // this.setState({
    //   query: '',
    // });
  };

    // const { query } = this.state;

    return (
      <SearchFormStyled onSubmit={handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          onChange={handleInput}
          placeholder="What do you want to write?"
          name="search"
          required
          value={query}
          autoFocus
        />
      </SearchFormStyled>
    );
}
