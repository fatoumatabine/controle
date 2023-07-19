import React from 'react';
import femmes from '../../assets/Femmes.png';
import logoWT from '../../assets/logoWT.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <div className="gpt3__whatgpt3-heading">
        <img src={logoWT} alt="Logo" className="rounded-logo" />
        <h1 className="gradient__text">Construisons quelque chose d'incroyable avec WonderTech</h1>
      </div>
      {/* Reste du contenu du composant */}
    </div>

    <div className="gpt3__header-image">
      <img src={femmes} alt="Illustration de femmes" />
    </div>
  </div>
);

export default Header;
