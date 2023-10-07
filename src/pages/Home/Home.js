import "./Home.scss";
import { useEffect } from "react";
import React from 'react';
import LiveStream from "../../components/LiveStream/Livestream";


 

function Home() {
  useEffect(() => {
    document.title = "Raté Radio - Accueil";
  }, []);
  return (
    <div className="home">
      <main>
        <div className="page_content_title">
          <h1>Votre Radio</h1>
          <p>Bienvenue sur Raté Radio!</p>
        </div>
        <LiveStream />
        {/* Add other content for your homepage here */}
              {/* Embed the Radio King player using an iframe */}
        <p>Mettre Radio King / Youtube API / PodBean </p>
        <iframe className="player_frame"
          title="Radio Player"
          src="https://www.radioking.com/widgets/player/player-iframe?radio=YOUR_RADIO_ID"
          width="100%"
          height="300"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      
      {/* Add other content here */}
      </main>


    </div>
  );
}

export default Home;
