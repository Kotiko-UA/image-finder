import { Component } from 'react';
import { Image, Li } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {};
  render() {
    return (
      <Li>
        <Image />
      </Li>
    );
  }
}

export default ImageGalleryItem;
