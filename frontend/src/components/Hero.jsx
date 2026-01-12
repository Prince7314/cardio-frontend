import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';

const Hero = () => {
    const navigate = useNavigate();

    const scrollToFeatures = () => {
        const element = document.getElementById('features');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white-mesh">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary-50/50 to-transparent -z-10" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-surface-50 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-8 border border-primary-100 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        Next Generation Cardiac Health AI
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-surface-900 mb-8 leading-tight">
                        Advanced Cardiology <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-500">
                            Powered by Intelligence
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-surface-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experience the future of heart health monitoring with our clinical-grade AI algorithms designed for precision and peace of mind.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4" onClick={() => navigate('/predict')}>
                            Start Free Assessment
                        </Button>
                    </div>

                    <div className="mt-16 pt-8 border-t border-surface-200">
                        <p className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-6">Trusted by leading institutions</p>
                        <div className="flex justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholders for logos (using text for now as requested no placeholders, but text is safer than broken images) */}
                            <span className="text-xl font-bold text-surface-400">Mayo Clinic</span>
                            <span className="text-xl font-bold text-surface-400">Cleveland Clinic</span>
                            <span className="text-xl font-bold text-surface-400">Johns Hopkins</span>
                            <span className="text-xl font-bold text-surface-400">Stanford Med</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
