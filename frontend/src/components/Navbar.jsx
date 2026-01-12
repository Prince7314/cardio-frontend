import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './ui/Button';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (id) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-glass border-b border-surface-200' : 'bg-transparent border-b border-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/30">
                            C
                        </div>
                        <span className="text-xl font-bold font-display text-surface-900 tracking-tight">
                            Cardio<span className="text-primary-600">.ai</span>
                        </span>
                    </Link>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/" className="font-medium text-surface-600 hover:text-primary-600 transition-colors">Home</Link>
                            <button onClick={() => handleScrollTo('features')} className="font-medium text-surface-600 hover:text-primary-600 transition-colors bg-transparent border-none cursor-pointer">Features</button>
                            <button onClick={() => handleScrollTo('about')} className="font-medium text-surface-600 hover:text-primary-600 transition-colors bg-transparent border-none cursor-pointer">About Us</button>
                        </div>
                    </div>

                    <div>
                        <Button variant="primary" className="hidden md:inline-flex" onClick={() => navigate('/predict')}>
                            Predict Risk
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
