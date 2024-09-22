import React, { useEffect, useState } from 'react';
import './ActorDetails.css';

function ActorDetails({ actorId, onClose }) {
    const [actorDetails, setActorDetails] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTJmMTI4NzQyZmQwYTNiYjNhZTJlMmJhYTY0ZWQ5ZSIsIm5iZiI6MTcyNTc3MjAxOC4yODgxMzYsInN1YiI6IjY2YmYwZGEyYTU1YjA1ZjVkZDYxMTI5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SN8TMHj0yiS5GY7nCAL4pr60TUDI90WAJwb6aP--f_0'
            }
        };

        fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=ea2f128742fd0a3bb3ae2e2baa64ed9e`, options)
            .then(response => response.json())
            .then(data => setActorDetails(data))
            .catch(err => console.error(err));
    }, [actorId]);

    if (!actorDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="actor-details">
            <button className="close-button" onClick={onClose}>Close</button>
            <img src={`https://image.tmdb.org/t/p/w500${actorDetails.profile_path}`} alt={actorDetails.name} />
            <h2>{actorDetails.name}</h2>
            <p><strong>Birthday:</strong> {actorDetails.birthday}</p>
            <p><strong>Place of Birth:</strong> {actorDetails.place_of_birth}</p>
            <p><strong>Known For:</strong> {actorDetails.known_for_department}</p>
            <p><strong>Biography:</strong> {actorDetails.biography}</p>
        </div>
    );
}

export default ActorDetails;