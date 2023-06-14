import React from 'react';

const MovieCard = ({ movie, handleCardClick }) => {
  const { title, description, posterURL, rating, trailerURL } = movie;

  const handleClick = () => {
    handleCardClick(movie);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default MovieCard;
