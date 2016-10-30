/* global jQuery */
import React from 'react';
import { ModalPost } from './ModalPost.react';

export class Modal extends React.Component {
  
  constructor(props) {
    super(props);

    var height = 576;
    if (window.matchMedia("(max-width: 680px)").matches) {
      height = 600;
    }
    this.state = {
      posts: props.posts,
      height: height
    };
  }

  componentDidMount() {
    this.slider = jQuery('.modal-instabinge-slider').royalSlider({
      keyboardNavEnabled: true,
      sliderDrag: true,
      arrowsNavHideOnTouch: true,
      navigateByClick: false,
      transitionSpeed: 260,
      startSlideId: this.props.index,
      controlNavigation: 'none'
    }).data('royalSlider');
  }

  render() {
    var postNodes = this.state.posts.map((post, i) => {
      return <ModalPost
        key={i}
        post={post}
      />
    });

    return (
      <div className="modal modal-instabinge">
        <button
          type="button"
          className="modal-action"
          onClick={this.props.onClose}>x</button>
        <div className="modal-wrap">
          <div className="modal-instabinge-slider">
            {postNodes}
          </div>
        </div>
        <button
          type="button"
          className="modal-prev"
          onClick={this.onPrev.bind(this)}></button>
        <button
          type="button"
          className="modal-next"
          onClick={this.onNext.bind(this)}></button>
      </div>
    );
  }

  onPrev() {
    this.slider.prev();
  }

  onNext() {
    this.slider.next();
  }
}