import React from 'react'; //eslint-disable-line
import Time from './Time';

let Post = function(props) {
  var
    playNode,
    locationNode;

  if (props.post.location !== null) {
    locationNode = <div className="inst-post-location">
      <i className="icon-location inline"></i><span className="inline">{props.post.location.name}</span>
    </div>
  }

  if (props.post.type === 'video') {
    playNode = <div className="icon-play"></div>
  }

  return (
    <div className="inst-post" onClick={props.showModal}>
      <div className={'inst-post-img ' + props.post.type}>
        <img src={props.post.images.thumbnail.url.replace('s150x150', 's320x320')} />
        {playNode}
      </div>
      <div className="inst-post-detail">
        {locationNode}
        <span className="inst-post-time">{Time.format(Date.now(), props.post.created_time)}</span>
      </div>
    </div>
  );
};

export { Post };