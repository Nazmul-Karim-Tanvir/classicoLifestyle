import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SectionHero from './SectionHero';
import SectionToday from './SectionToday';
import SectionCategories from './SectionCategories';
import SectionBestSelling from './SectionBestSelling';
import SectionExclusiveOffer from './SectionExclusiveOffer';
import SectionExploreProducts from './SectionExploreProducts';
import SectionNewArrival from './SectionNewArrival';
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
            <div data-aos="fade-up"><SectionToday /></div>
            <div data-aos="fade-up"><SectionCategories /></div>
            <div data-aos="fade-up"><SectionBestSelling /></div>
            <div data-aos="fade-up"><SectionExclusiveOffer /></div>
            <div data-aos="fade-up"><SectionExploreProducts /></div>
            <div data-aos="fade-up"><SectionNewArrival /></div>
            <div data-aos="fade-up"><Services /></div>
        </div>
    );
};

export default HomePage;