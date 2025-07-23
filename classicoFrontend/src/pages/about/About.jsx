import Services from '../../components/Services';
import SectionAboutpageHero from './SectionAboutpageHero';
import SectionGrowth from './SectionGrowth';
import SectionEmployee from './SectionEmployee';

const About = () => {
    return (
        <div>
            <SectionAboutpageHero />
            <SectionGrowth />
            <SectionEmployee />
            <Services />
        </div>
    );
};

export default About;
