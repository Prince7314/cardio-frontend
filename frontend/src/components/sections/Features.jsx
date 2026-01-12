import React from 'react';

const features = [
    {
        title: "Instant Risk Prediction",
        description: "Get immediate results using our ensemble machine learning models trained on over 70,000 clinical records.",
        icon: "⚡"
    },
    {
        title: "Explainable AI",
        description: "Understand the 'Why'. We break down the key factors contributing to your specific risk score.",
        icon: "🔍"
    },
    {
        title: "Personalized Insights",
        description: "Receive tailored lifestyle and dietary recommendations based on your unique health profile.",
        icon: "🧬"
    },
    {
        title: "Secure & Private",
        description: "Your health data is processed locally in your browser session and is never sold to third parties.",
        icon: "🔒"
    },
    {
        title: "Medical Grade",
        description: "Evaluated against standard medical guidelines and validated for high sensitivity and specificity.",
        icon: "🏥"
    },
    {
        title: "PDF Reports",
        description: "Download comprehensive reports to share with your healthcare provider or keep for your records.",
        icon: "📄"
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide mb-2">Why Cardio AI</h2>
                    <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Cardiac Care Intelligence</p>
                    <p className="text-slate-600 text-lg">Everything you need to understand and manage your heart health risks proactively.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-3xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
