import React from 'react';
import './Gallery2.scss';
// Plus tard mettre des props pour le lien API et le nombre de videos a montrer et d'autres filtres si besoin


const Gallery2 = ({data, itemShown}) => {

  console.log(data)

  return (
    <div className="gallery">
      {data.slice(0, itemShown).map((item) => (
        <div key={item.id} className="gallery-item">
          <img src={item.thumbnailUrl} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery2;
