import React from 'react';
import './ShowCard.css';

function ShowCard({ actor, onSelect }) {
    return (
        <div className="show-card" onClick={() => onSelect(actor.id)}>
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
            <div className="show-card-content">
                <h2>{actor.name}</h2>
                <p>Popularity: {actor.popularity}</p>
            </div>
        </div>
    );
}

export default ShowCard;