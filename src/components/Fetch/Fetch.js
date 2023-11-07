import React, { useEffect, useState } from 'react';
import './Fetch.scss';
import Gallery2 from '../../components/Gallery2/Gallery2';

function Fetch({api}){
    const [galleryData, setGalleryData] = useState([]);
    // const [nmbItems, setnmbItems] = useState(10);


    useEffect(() => {
        // Fetch data from the API and set it in the galleryData state
        // Replace 'API_ENDPOINT' with the actual API endpoint URL
        fetch(api)
          .then((response) => response.json())
          .then((data) => setGalleryData(data.items))
          .catch(err => {
            console.log('Erreur API',err);
         });
      }, [api]);

      if(galleryData.length > 1){
        return (
          <div>
          {/* <button onClick={() => setnmbItems(nmbItems => nmbItems + 10)}>add 10</button>
          <button onClick={() => setnmbItems(nmbItems => nmbItems - 10)}>remove 10</button> */}
          <Gallery2 
          data = {galleryData}
          // itemShown = {nmbItems}
          />        
        </div>
        )
      }
      else{
        return(
          <section className='error_container'>
            <h3>Nous rencontrons des problèmes avec notre base de données 😱</h3>
            <p>Veuillez réessayer plus tard</p>
          </section>
        )
      }

}


export default Fetch;
