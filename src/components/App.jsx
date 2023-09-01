import { Component } from 'react';
import { Wrapper } from './App.syled';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { searchImg } from 'api';
import { toast } from 'react-hot-toast';

export class App extends Component {
  state = {
    imageSet: [],
    searchText: '',
    page: 1,
    modal: false,
    modalUrl: '',
    modalAlt: '',
    loading: false,
    maxPages: 0,
  };
  onSearchSubmit = e => {
    e.preventDefault();
    if (e.target.elements.search.value === '') {
      toast.error('Gotta write something!');
      return;
    }
    this.setState({
      searchText: `${Date.now()}/${e.target.elements.search.value.toLowerCase()}`,
      imageSet: [],
      page: 1,
    });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const imgs = await searchImg(this.state.searchText, this.state.page);

        this.setState(prevState => ({
          imageSet: [...prevState.imageSet, ...imgs.hits],
          maxPages: Math.floor(imgs.totalHits / 12),
        }));
        if (prevState.page === this.state.page) {
          toast.success(`You have ${imgs.totalHits} images`);
        }

        console.log(imgs);
        window.scrollBy({
          top: 520,
          behavior: 'smooth',
        });
      } catch (error) {
        toast.error('Wow! Something went wrong!');
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  onLoadMore = () => {
    this.setState(prevState => {
      if (prevState.page + 1 === this.state.maxPages) {
        toast.error('pictures are over');
        return null;
      }
      return { page: prevState.page + 1 };
    });
  };

  omImgClick = e => {
    const modalImg = this.state.imageSet.filter(
      img => img.webformatURL === e.target.src
    );
    this.setState({
      modal: true,
      modalUrl: modalImg[0].largeImageURL,
      modalAlt: modalImg[0].alt,
    });
  };
  onExitModal = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      this.setState({ modal: false });
    }
  };
  render() {
    return (
      <Wrapper>
        <Searchbar onSearchSubmit={this.onSearchSubmit} />
        {this.state.imageSet.length > 0 && (
          <ImageGallery
            omImgClick={this.omImgClick}
            imageSet={this.state.imageSet}
          />
        )}
        {this.state.loading && <Loader />}
        {this.state.imageSet.length > 0 &&
          this.state.page !== this.state.maxPages && (
            <Button onLoadMore={this.onLoadMore} />
          )}
        {this.state.modal && (
          <Modal
            onExitModal={this.onExitModal}
            modalUrl={this.state.modalUrl}
            alt={this.state.modalAlt}
          />
        )}
      </Wrapper>
    );
  }
}
