import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, handleCardClick }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} handleCardClick={handleCardClick} />
      ))}
    </div>
  );
};

export default MovieList;
