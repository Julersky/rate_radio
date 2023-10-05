import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <header>
        <h1>Qui sommes-nous ?</h1>
        <p>Raté Radio qu'est-ce que c'est?</p>
      </header>

      <main>
        <section className="content">
          <h2>Notre histoire</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
        </section>

        <section className="team">
          <h2>Notre équipe</h2>
          <ul>
            <li>John Doe - Founder</li>
            <li>Jane Smith - DJ</li>
            <li>Mike Johnson - Producer</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default About;
