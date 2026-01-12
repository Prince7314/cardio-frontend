import React from 'react';

const steps = [
    {
        number: "01",
        title: "Enter Your Details",
        description: "Input basic vitals like age, blood pressure, and activity level into our secure form."
    },
    {
        number: "02",
        title: "AI Analysis",
        description: "Our machine learning model instantly processes your data against thousands of clinical patterns."
    },
    {
        number: "03",
        title: "Get Results",
        description: "Receive a detailed risk profile, explanation of factors, and personalized advice."
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide mb-2">Process</h2>
                    <p className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-3xl bg-white border-2 border-indigo-100 flex items-center justify-center text-2xl font-bold text-indigo-600 shadow-xl shadow-indigo-100 mb-8 transform rotate-3 hover:rotate-6 transition-transform duration-300">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
