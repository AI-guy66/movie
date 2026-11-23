import React, { useRef, useState } from 'react';
import '../styles/VideoPlayer.css';

function VideoPlayer({ movieTitle, videoUrl }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="video-player-container">
      <div className="video-player">
        <video
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          src={videoUrl}
          className="video-element"
        />
        <div className="player-overlay">
          <button className="play-button" onClick={togglePlay}>
            {isPlaying ? '⏸' : '▶'}
          </button>
        </div>
        <div className="player-controls">
          <div className="progress-bar-container">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              className="progress-bar"
            />
          </div>
          <div className="control-buttons">
            <button onClick={togglePlay} className="control-btn">
              {isPlaying ? '⏸ Pause' : '▶ Play'}
            </button>
            <span className="time-display">
              {formatTime(videoRef.current?.currentTime)} / {formatTime(duration)}
            </span>
            <div className="control-spacer"></div>
            <select className="quality-select">
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
              <option value="480p">480p</option>
            </select>
            <button className="fullscreen-btn">⛶ Fullscreen</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
