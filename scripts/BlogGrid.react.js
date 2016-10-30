/* global AjaxData, jQuery */
import React from 'react';
import { Modal } from './Modal.react';
import { Post } from './Post.react';

export class BlogGrid extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true,
      isFinished: false
    };
    this.onSuccess = this.onSuccess.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    var
      buttonNode,
      modalNode,
      postNodes = [];

    if (!this.state.isFinished) {
      if (this.state.isLoading) {
        buttonNode = <button id="load-more" className="button" onClick={this.loadMore.bind(this)}>
          <div className="loader-icon"><i className="icon-loader"></i></div>
        </button>
      } else {
        buttonNode = <button id="load-more" className="button" onClick={this.loadMore.bind(this)}>
          <span>LOAD MORE...</span>
        </button>
      }
    }

    if (this.state.isModalActive) {
      modalNode = <Modal
        posts={this.state.posts}
        index={this.state.index}
        onClose={this.onModalClose.bind(this)} />
    }

    if (this.state.posts.length > 0) {
      postNodes = this.state.posts.map((o, i) => {
        return <Post
          key={i}
          post={o}
          showModal={() => { this.showModal(o, i); }} />
      });
    }

    return (
      <div className="blog-grid">
        {postNodes}
        <div className="center">
          {buttonNode}
        </div>
        {modalNode}
      </div>
    );
  }
  
  fetch(nextUrl) {
    var params = {
      action: 'do_ajax',
      fn: 'instabinge',
      nextUrl: nextUrl
    };

    console.log('fetch', nextUrl);
    jQuery.getJSON(AjaxData.url, params)
      .done(this.onSuccess)
      .fail(this.onFail);
  }
  
  onSuccess(response) {
    console.log(response);
    // change thumbnail size to 320 instead of default 150
    this.setState({
      posts: this.state.posts.concat(response.data),
      nextUrl: response.pagination.next_url,
      isLoading: false,
      isFinished: response.pagination.next_url === undefined
    });
  }

  onFail() {
    
  }

  showModal(post, idx) {
    console.log(post,idx);
    this.setState({
      isModalActive: true,
      index: idx
    });
  }

  onModalClose() {
    this.setState({
      isModalActive: false
    });
  }

  loadMore() {
    var count = 0;

    // load from memory
    this.setState({
      isLoading: true
    });


    // on each load get the next 6 images
    for (var i = this.state.end; i < this.state.posts.length; i++) {
      count++;
    }
  
    console.log('count', count);
    if (count < 6) {
      // fetch more from the server
      this.fetch(this.state.nextUrl);
    } else {
      setTimeout(() => {
        this.setState({
          end: this.state.end + 6,
          isLoading: false
        });
      }, 1000);
      
    }
  }
}