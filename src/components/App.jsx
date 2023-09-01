import { Component } from 'react';
import { Wrapper } from './App.syled';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    modal: false,
    searchText: '',
  };
  onSearch;
  render() {
    return (
      <Wrapper>
        <Searchbar />
        <Loader />
        <ImageGallery />
        <Button />
        {this.state.modal && <Modal />}
      </Wrapper>
    );
  }
}
