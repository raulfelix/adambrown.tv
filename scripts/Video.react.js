import React from 'react';
import ReactDOM from 'react-dom';

export class Video extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <video 
        poster={this.props.poster}
        preload="none"
        src={this.props.src}
        type="video/mp4"
        loop=""
        onClick={this.onPlay.bind(this)}></video>
    );
  }

  onPlay() {
    ReactDOM.findDOMNode(this).play();
    this.props.onPlay();
  }

}
