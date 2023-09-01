import { Component } from 'react';
import { ModalDiv, Overlay } from './Modal.styled';

class Modal extends Component {
  state = {};
  render() {
    return (
      <Overlay>
        <ModalDiv>
          <img src="" alt="" />
        </ModalDiv>
      </Overlay>
    );
  }
}

export default Modal;
