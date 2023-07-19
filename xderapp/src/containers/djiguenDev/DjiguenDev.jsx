import React from 'react';
import Feature from '../../components/feature/Feature';
import WT from '../../assets/WT.jpg'; // Import the WT image
import './djiguenDev.css';

const DjiguenDev = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <img src={WT} alt="wonderTech" className="WT" /> {/* Add the WT image */}
      <Feature title="À propos de wonderTech" text="Chez wonderTech, nous sommes passionnés par la création de solutions innovantes pour répondre aux défis technologiques. Nous sommes fiers de notre expertise dans le développement d'applications web et mobiles, la conception d'interfaces utilisateur intuitives et la mise en place de solutions robustes et évolutives." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Des possibilités qui dépassent votre imagination</h1>
      <p>Explorez notre bibliothèque de fonctionnalités</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Sensibiliser" text="Nous croyons en la puissance de la sensibilisation. Nos solutions vous aident à communiquer efficacement avec votre public cible, à transmettre votre message clairement et à créer un impact positif." />
      <Feature title="Inspirer" text="L'inspiration est au cœur de notre approche. Nous créons des expériences interactives et captivantes qui stimulent l'imagination, favorisent la créativité et incitent à l'action." />
      <Feature title="Donner Confiance" text="La confiance est essentielle pour établir des relations solides. Nous concevons des solutions sécurisées et fiables qui garantissent la confidentialité des données et offrent une expérience utilisateur transparente et sans faille." />
    </div>
  </div>
);

export default DjiguenDev;
