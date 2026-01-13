import React from 'react';

const models = [
    { name: 'Random forest', accuracy: 73.6, active: true },
    { name: 'Calibrated Classifier', accuracy: 73.6, active: false },
    { name: 'Stacking Classifier', accuracy: 73.4, active: false },
    { name: 'Linear SVC', accuracy: 73.0, active: false },
    { name: 'Logistic Regression', accuracy: 72.5, active: false },
    { name: 'Linear Regression', accuracy: 72.5, active: false }, // Note: Duplicate name in prompt, keeping exact valid text
    { name: 'Gaussian Naive Bayes', accuracy: 71.4, active: false },
    { name: 'K-Nearest Neighbors', accuracy: 71.2, active: false },
    { name: 'Decision Tree', accuracy: 68.8, active: false },
];

const ModelPerformance = () => {
    return (
        <section className="py-24 bg-surface-50 relative overflow-hidden">
            {/* Dotted Grid Pattern Background */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                opacity: 0.3
            }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* SECTION 1: Benchmark Performance */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">Benchmark Performance</h2>
                        <p className="text-lg text-slate-600">
                            Comparative accuracy across tested algorithms
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft border border-surface-200">
                        <div className="space-y-6">
                            {models.map((model, index) => (
                                <div key={index} className="group">
                                    <div className="flex justify-between items-end mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className={`font-semibold ${model.active ? 'text-primary-600' : 'text-slate-700'}`}>
                                                {model.name}
                                            </span>
                                            {model.active && (
                                                <span className="px-2 py-0.5 text-xs font-bold text-primary-700 bg-primary-50 rounded-full border border-primary-200 uppercase tracking-wide">
                                                    Active Model
                                                </span>
                                            )}
                                        </div>
                                        <span className={`font-mono font-bold ${model.active ? 'text-primary-600' : 'text-slate-500'}`}>
                                            {model.accuracy}%
                                        </span>
                                    </div>
                                    <div className="h-3 w-full bg-surface-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-1000 ease-out ${model.active ? 'bg-primary-600' : 'bg-slate-300'}`}
                                            style={{ width: `${model.accuracy}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SECTION 2: Model Intelligence */}
                <div className="text-center max-w-4xl mx-auto">
                    {/* Brain Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-glass flex items-center justify-center text-primary-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                            </svg>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-6">Model Intelligence</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-16 max-w-3xl mx-auto">
                        Cardio.AI is powered by an ensemble of advanced machine learning algorithms, rigorously tested against over 70,000 patient records to ensure clinical-grade reliability.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-3xl shadow-glass border border-white/60 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-surface-900 mb-4">Extensive Training</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Trained on robust clinical and lifestyle datasets comprising over 70,000+ validated patient records.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-3xl shadow-glass border border-white/60 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-surface-900 mb-4">RandomForest</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Utilizing advanced gradient boosting with calibrated probabilities for maximum predictive precision.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-3xl shadow-glass border border-white/60 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-surface-900 mb-4">73.6% Precision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Validated on independent unseen test sets to ensure real-world reliability and minimize false negatives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModelPerformance;
