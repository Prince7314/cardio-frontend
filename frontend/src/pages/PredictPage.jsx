import React from 'react';
import PredictionForm from '../components/PredictionForm';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PredictPage = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <PredictionForm />
            </main>
            <Footer />
        </div>
    );
};

export default PredictPage;
