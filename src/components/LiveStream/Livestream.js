import "./Livestream.scss";
import React, { Component } from 'react';

class LiveStream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
  }

  // Function to toggle play/pause
  togglePlay = () => {
    const audioElement = this.audioRef.current;

    if (this.state.isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    this.setState({ isPlaying: !this.state.isPlaying });
  };

  render() {
    return (
      <div className="live-stream">
        <h2>Le Direct</h2>
        <audio
          ref={this.audioRef}
          controls
          src="your-radio-stream-url.mp3"
          type="audio/mpeg"
          onPlay={() => this.setState({ isPlaying: true })}
          onPause={() => this.setState({ isPlaying: false })}
        >
          Your browser does not support the audio element.
        </audio>
        {/* <button onClick={this.togglePlay}>
          {this.state.isPlaying ? 'Pause' : 'Play'}
        </button> */}
      </div>
    );
  }
}

export default LiveStream;
