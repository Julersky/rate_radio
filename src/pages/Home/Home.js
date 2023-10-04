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
      <header>
        <h1>Votre Radio</h1>
        <p>Bienvenue sur Raté Radio!</p>
      </header>

      <main>
        <LiveStream />
        {/* Add other content for your homepage here */}
      </main>


    </div>
  );
}

export default Home;
