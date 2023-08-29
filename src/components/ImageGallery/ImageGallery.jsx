import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Ul } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {};
  render() {
    return (
      <Ul>
        <ImageGalleryItem />
      </Ul>
    );
  }
}

export default ImageGallery;
