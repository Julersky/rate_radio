import React, { useState } from 'react';
import './Gallery2.scss';
import './Card.scss';
import Player from '../Player/Player';
// Plus tard mettre des props pour le lien API et le nombre de videos a montrer et d'autres filtres si besoin


const Gallery2 = ({data, itemShown}) => {

  const [selectedCard, setSelectedCard] = useState(null);

  const openCard = (cardId) => {
    setSelectedCard(cardId);
  };

  const closeCard = () => {
    setSelectedCard(null);
  };

  const selectedTitle = data.find((item) => item.id.videoId === selectedCard)?.snippet.title;

  console.log(`http://www.youtube.com/embed/${selectedCard}?enablejsapi=1`)

  return (
    <div className="gallery">
      {data.slice(0, itemShown).map((item, i) => (
        <div key={i} className="gallery-card" onClick={() => {
          openCard(item.id.videoId);
          }}>
        <div className="card-image">
          <img src={item.imageUrl} alt={item.snippet.title} />
        </div>
        <div className="card-content">
          <h3 className="card-title">{item.snippet.title}</h3>
          <p className="card-description">{item.snippet.title}</p>
        </div>
      </div>
      ))}
      {selectedCard !== null && (
        <div className="foreground-card">
          <div className="foreground-content">
            <h4>{selectedTitle}</h4>
            <Player
            i = {selectedTitle}
            source = {selectedCard}
            />               
            <button onClick={closeCard}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery2;
