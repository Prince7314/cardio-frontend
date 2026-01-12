import React from 'react';

const FeatureCard = ({ title, description, icon }) => (
    <div className="group p-8 rounded-2xl bg-white border border-surface-100 shadow-glass hover:shadow-glass-lg hover:-translate-y-1 transition-all duration-300">
        <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-surface-900 mb-3">{title}</h3>
        <p className="text-surface-600 leading-relaxed">{description}</p>
    </div>
);

const Features = () => {
    return (
        <section id="features" className="py-24 bg-surface-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
                        Clinical-Grade Precision
                    </h2>
                    <p className="text-lg text-surface-600">
                        Our proprietary algorithms analyze millions of data points to provide accurate early warning signs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Real-time Analysis"
                        description="Instant processing of cardiac data with 99.8% accuracy using our advanced neural networks."
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
                    />
                    <FeatureCard
                        title="Predictive Modeling"
                        description="Forecast potential cardiac events weeks in advance based on subtle pattern recognition."
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>}
                    />
                    <FeatureCard
                        title="Secure Health Data"
                        description="Enterprise-grade encryption ensures your sensitive health records remain private and protected."
                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
