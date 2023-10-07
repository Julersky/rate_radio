import React, { Component } from 'react';
import './Replay.scss';
import Gallery from '../../components/Gallery/Gallery';
import { Radio } from 'react-loader-spinner'; // Import a specific loader type

class Replay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true, // Initial loading state
      // Other state properties for your replay data go here
    };
  }

  // Simulate loading (replace with actual data fetching)
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false }); // Set loading to false when data is loaded
    }, 2000); // Simulate a 2-second loading time (adjust as needed)
  }

  render() {
    return (
      <div className="replay">
        {this.state.loading ? (
          <div className="loader-container">
            <Radio // Use the TailSpin loader type
              color="#007BFF" // Loader color
              height={100} // Loader height
              width={100} // Loader width
            />
          </div>
        ) : (
          // Render your replay content when loading is complete
          <div>
            <Gallery />
            {/* Your replay content goes here */}
          </div>
        )}
      </div>
    );
  }
}

export default Replay;
