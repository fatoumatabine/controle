import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Amélioration instantanée des relations de confiance',
    text: 'Améliorez instantanément les relations de confiance envers votre entreprise. Votre réputation grandira et votre influence se renforcera. La confiance est un atout précieux dans le monde des affaires.',
  },
  {
    title: 'Devenez un acteur essentiel',
    text: 'Devenez un acteur essentiel dans votre domaine en saisissant cette opportunité. Profitez dune visibilité accrue et dune reconnaissance pour vos compétences et votre expertise.',
  },
  {
    title: 'Communiquez efficacement pour vous démarquer',
    text: 'Communiquez de manière convaincante et stratégique pour vous démarquer de la concurrence. Votre message clair et percutant captivera votre public et générera des résultats tangibles.',
  },
  {
    title: 'Maîtrisez les lois et les réglementations',
    text: 'Acquérez une compréhension approfondie des lois et des réglementations qui façonnent votre secteur. En étant au fait des exigences légales, vous pourrez prendre des décisions éclairées et éviter les problèmes juridiques.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">L'avenir est à portée de main et vous avez le pouvoir de le concrétiser. Sautez le pas dès aujourd'hui et forgez votre chemin vers un avenir prometteur.</h1>
      <p>Profitez d'une opportunité privilégiée d'intégrer notre programme avant son lancement officiel.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
