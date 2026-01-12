import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
import PredictionForm from './PredictionForm';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-slate-800">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <PredictionForm />
                <AboutUs />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
