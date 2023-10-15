import React, { useEffect, useState } from 'react';
import './Gallery.scss';
// Plus tard mettre des props pour le lien API et le nombre de videos a montrer et d'autres filtres si besoin

const Gallery = (API_KEY) => {
    const [galleryData, setGalleryData] = useState([]);
  
    useEffect(() => {
      // Fetch data from the API and set it in the galleryData state
      // Replace 'API_ENDPOINT' with the actual API endpoint URL
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((data) => setGalleryData(data));
    }, []);
    const maxItems = 10;
    return (
      <div className="gallery">
        {galleryData.slice(0, maxItems).map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.thumbnailUrl} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Gallery;