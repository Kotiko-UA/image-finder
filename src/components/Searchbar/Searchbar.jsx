import { Component } from 'react';
import {
  ButtonLabel,
  FormInput,
  HeaderWrap,
  SearchForm,
  SearchFormButton,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = { input: '' };
  onInput = ({ target }) => {
    this.setState({ input: target.value });
  };
  render() {
    return (
      <HeaderWrap>
        <SearchForm onSubmit={this.props.onSearchSubmit}>
          <SearchFormButton type="submit">
            <ButtonLabel>S</ButtonLabel>
          </SearchFormButton>

          <FormInput
            onChange={this.onInput}
            type="text"
            name="search"
            value={this.state.input}
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
