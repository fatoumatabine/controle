import React from 'react';

const Filtre = ({ handleFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        onChange={handleFilterChange}
      />
      <select onChange={handleFilterChange}>
        <option value="">Tous les films</option>
        <option value="5">5 étoiles</option>
        <option value="4">4 étoiles et plus</option>
        <option value="3">3 étoiles et plus</option>
        <option value="2">2 étoiles et plus</option>
        <option value="1">1 étoile et plus</option>
      </select>
    </div>
  );
};

export default Filtre;
