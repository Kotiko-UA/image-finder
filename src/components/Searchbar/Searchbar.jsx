import { Component } from 'react';
import {
  ButtonLabel,
  FormInput,
  HeaderWrap,
  SearchForm,
  SearchFormButton,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {};
  render() {
    return (
      <HeaderWrap>
        <SearchForm>
          <SearchFormButton type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>

          <FormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </HeaderWrap>
    );
  }
}

export default Searchbar;
