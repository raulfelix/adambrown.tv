/* global jQuery */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ModalPost } from './ModalPost.react';

export class Modal extends React.Component {
  
  constructor(props) {
    super(props);

    var height = 576;
    if (window.matchMedia("(max-width: 680px)").matches) {
      height = 600;
    }
    this.isFinished = props.isFinished;
    this.isLoading = false;
    this.posts = props.posts;
    this.state = {
      height: height
    };
  }

  componentDidMount() {
    this.slider = jQuery('.modal-instabinge-slider').royalSlider({
      keyboardNavEnabled: true,
      sliderDrag: false,
      arrowsNavHideOnTouch: true,
      navigateByClick: false,
      transitionSpeed: 260,
      startSlideId: this.props.index,
      controlNavigation: 'none'
    }).data('royalSlider');

    this.slider.ev.on('rsBeforeAnimStart', () => {
      console.log('rsBeforeAnimStart');
      if (this.posts.length - 1 === this.slider.currSlideId) {
        console.log(this.isFinished);
        if (!this.isFinished && !this.isLoading) {
          this.isLoading = true;
          this.props.onFetch((posts, isFinished) => {
            this.add(posts);
            this.posts = this.posts.concat(posts);
            this.isFinished = isFinished;
            this.isLoading = false;
          });
        }
      }
    });

    this.slider.ev.on('rsAfterSlideChange', () => {
      // if (this.posts.length - 1 === this.slider.currSlideId) {
      //   console.log(this.isFinished);
      //   if (!this.isFinished && !this.isLoading) {
      //     this.isLoading = true;
      //     this.props.onFetch((posts, isFinished) => {
      //       this.add(posts);
      //       this.posts = this.posts.concat(posts);
      //       this.isFinished = isFinished;
      //       this.isLoading = false;
      //     });
      //   }
      // }
    });
  }

  componentWillUnmount() {
    this.slider.destroy();
  }

  add(posts) {
    posts.forEach((post, i) => {
      this.slider.appendSlide(ReactDOMServer.renderToString(
        <ModalPost
          key={i}
          post={post} />
      ));
    });
  }

  render() {
    var postNodes = this.posts.map((post, i) => {
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