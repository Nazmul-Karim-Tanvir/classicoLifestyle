import React from 'react';
import SectionHero from './SectionHero';
import SectionOurValue from './SectionOurValue';
import SectionTeam from './SectionTeam';
import Services from '../../components/Services'; // If you're still using this

const About = () => {
  return (
    <section className="py-16">
      <SectionHero />
      <SectionOurValue />
      <Services />
    </section>
  );
};

export default About;
