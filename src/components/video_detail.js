import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div className="whitespace">
        <div className="loading"></div>
      </div>;
  }
  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;


  return (
    <div className="main-card video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div className="details-title">{video.snippet.title}</div>
        <div className="details-description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
