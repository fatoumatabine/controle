import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="Illustration des possibilités" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Demandez un accès anticipé pour commencer</h4>
      <h1 className="gradient__text">Explorez des possibilités <br /> au-delà de votre imagination</h1>
      <p>Découvrez un monde d'innovation et de créativité où les opportunités sont infinies. Grâce à nos solutions technologiques de pointe, vous pouvez repousser les limites et atteindre de nouveaux sommets. Rejoignez-nous dès maintenant pour faire partie de cette révolution.</p>
      <button className="btn-primary">Demander un accès anticipé</button>
    </div>
  </div>
);

export default Possibility;
