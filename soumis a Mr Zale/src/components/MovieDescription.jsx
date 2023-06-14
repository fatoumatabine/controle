import React from 'react';

const MovieDescription = ({ movie, handleBackClick }) => {
  const { title, description, trailerURL } = movie;

  return (
    <div className="movie-description">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="trailer">
        <iframe width="560" height="315" src={trailerURL} title="Trailer" frameBorder="0" allowFullScreen></iframe>
      </div>
      <button onClick={handleBackClick}>Retour</button>
    </div>
  );
};

export default MovieDescription;
