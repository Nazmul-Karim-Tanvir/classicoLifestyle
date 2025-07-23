import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SectionHero from './SectionHero';
import Services from '../../components/Services';

const HomePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 700, // animation duration
            once: true, // animation only once
        });
    }, []);

    return (
        <div>
            <div data-aos="fade-up"><SectionHero /></div>
            <div data-aos="fade-up"><Services /></div>
        </div>
    );
};

export default HomePage;