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
        isFinished={this.state.isFinished}
        onClose={this.onModalClose.bind(this)}
        onFetch={this.onFetchFromModal.bind(this)} />
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
  
  fetch(nextUrl, callback) {
    var params = {
      action: 'do_ajax',
      fn: 'instabinge',
      nextUrl: nextUrl
    };

    jQuery.getJSON(AjaxData.url, params)
      .done((response) => {
        var posts = this.state.posts.concat(response.data);

        this.setState({
          posts: posts,
          nextUrl: response.pagination.next_url,
          isLoading: false,
          isFinished: response.pagination.next_url === undefined
        }, () => {
          if (callback) {
            callback(response.data, this.state.isFinished);
          }  
        });

      });
  }

  onFetchFromModal(callback) {
    this.fetch(this.state.nextUrl, callback);
  }

  onSuccess(response) {
    this.setState({
      posts: this.state.posts.concat(response.data),
      nextUrl: response.pagination.next_url,
      isLoading: false,
      isFinished: response.pagination.next_url === undefined
    });
  }

  showModal(post, idx) {
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
    // load from memory
    this.setState({
      isLoading: true
    });

    this.fetch(this.state.nextUrl);
  }
}