import React from 'react';
import { useState } from 'react';
import './Replay2.scss';
import Fetch from '../../components/Fetch/Fetch';

function Replay(){
    const [baseAPI, setBaseApi] = useState('https://jsonplaceholder.typicode.com/photos');

    return (
     <div>
        <div>
            <button onClick={() => setBaseApi('https://jsonplaceholder.typicode.com/photos')}>photos</button>
            <button onClick={() => setBaseApi('https://jsonplaceholder.typicode.com/comments')}>comments</button>
            <button onClick={() => setBaseApi('https://jsonplaceholder.typicode.com/albums')}>albums</button>
            

        </div>
        <div>
            <Fetch 
            api = {baseAPI}
            />
        </div>
     </div>


    );
}


export default Replay;
