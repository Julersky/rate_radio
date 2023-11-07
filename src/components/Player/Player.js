import './Player.scss';

function Player(i, source){

    return (
        <div className='player_container'>
            <iframe
            title= {i}
            id="player" 
            type="text/html" 
            width="640" 
            height="360"
            src ={`http://www.youtube.com/embed/${source}?enablejsapi=1`}>            
            </iframe>
        </div>

    )

}

export default Player;