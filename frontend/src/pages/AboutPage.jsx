import React from 'react';
import AboutUs from '../components/AboutUs';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AboutPage = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <AboutUs />
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
