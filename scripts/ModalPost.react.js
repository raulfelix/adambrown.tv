import React from 'react'; //eslint-disable-line
import Time from './Time';
import { Video } from './Video.react';

export class ModalPost extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isVideo: this.props.post.type === 'video'
    };
  }

  render() {
    var
      locationNode,
      mediaNode,
      playNode,
      classes = ['modal-view-image'];

    if (this.props.post.location) {
      locationNode = <div className="inst-post-location">
        <i className="icon-location inline"></i><span className="inline">{this.props.post.location.name}</span>
      </div>
    }

    if (this.props.post.type === 'video') {
      classes.push('video');
      
      // when viewing video dont show triangle
      if (this.state.isVideo) {
        playNode = <div className="icon-play" onClick={() => { this.refs.vid.onPlay(); }}></div>
      }

      mediaNode = <Video controls
        ref="vid"
        poster={this.props.post.images.standard_resolution.url}
        src={this.props.post.videos.standard_resolution.url}
        onPlay={this.onPlay.bind(this)} />
    } else {
      mediaNode = <img src={this.props.post.images.standard_resolution.url} />
    }

    if (this.props.post.images.standard_resolution.height > this.props.post.images.standard_resolution.width) {
      classes.push('height-100');
    }
    return (
      <div className="modal-slide" onClick={this.props.onClick}>
        <div className="instabinge-pod-wrap inst-post">
          <div className={classes.join(' ')}>
            {mediaNode}
            {playNode}
          </div>
          <div className="modal-view-details">
            <div className="inst-wrap">
              {locationNode}
              <span className="inst-post-time">{Time.format(Date.now(), this.props.post.created_time)}</span>
              <p>{this.props.post.caption.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onPlay() {
    this.setState({
      isVideo: false
    });
  }
}