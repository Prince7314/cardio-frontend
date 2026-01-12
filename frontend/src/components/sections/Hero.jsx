import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/4"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Content */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in-up">
                            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                            AI-Powered Healthcare
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Predict Heart Risk with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Precision AI</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Clinical-grade cardiovascular assessment tools for everyone. Get instant, explainable insights into your heart health using advanced machine learning.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <Link to="/predict">
                                <Button className="w-full sm:w-auto px-8 py-4 text-lg shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all transform hover:-translate-y-1">
                                    Start Free Assessment
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-10 flex items-center gap-4 text-sm text-slate-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 bg-[url('https://i.pravatar.cc/100?img=${i + 10}')] bg-cover`}></div>
                                ))}
                            </div>
                            <p>Trusted by 10,000+ users</p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="relative w-full max-w-[600px] aspect-square">
                            {/* Glass Card Background */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/50 shadow-2xl shadow-indigo-500/10 rotate-3"></div>

                            {/* Main Image */}
                            <img
                                src="/assets/hero-image.png"
                                alt="AI Heart Visualization"
                                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Badge 1 */}
                            <div className="absolute top-12 left-0 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-white animate-bounce-slow">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">✓</div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-semibold uppercase">Accuracy</div>
                                        <div className="text-lg font-bold text-slate-900">73.6%</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge 2 */}
                            <div className="absolute bottom-20 -right-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-white animate-bounce-slow" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-lg">⚡</div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-semibold uppercase">Analysis Time</div>
                                        <div className="text-lg font-bold text-slate-900">&lt; 2 Seconds</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
