import React from 'react';

const Recommendations = ({ formData }) => {
    const recs = [];

    if (formData.smoking == 1) {
        recs.push({
            title: "Smoking Cessation",
            desc: "Quitting smoking is the single most effective way to lower your risk. Consider nicotine replacement therapies.",
            icon: "🚭"
        });
    }
    if (formData.active == 0) {
        recs.push({
            title: "Increase Activity",
            desc: "Aim for at least 150 minutes of moderate-intensity aerobic activity per week.",
            icon: "🏃"
        });
    }
    if (formData.cholesterol > 1) {
        recs.push({
            title: "Heart-Healthy Diet",
            desc: "Reduce saturated fats and increase intake of fiber, fruits, and vegetables to manage cholesterol.",
            icon: "🥗"
        });
    }
    if (formData.systolic_bp > 130) {
        recs.push({
            title: "Blood Pressure Management",
            desc: "Limit sodium intake, manage stress, and monitor BP regularly.",
            icon: "❤️"
        });
    }

    // Default if no specific major issues or just general advice
    if (recs.length < 2) {
        recs.push({
            title: "Regular Check-ups",
            desc: "Schedule annual visits with your healthcare provider for preventative screening.",
            icon: "👨‍⚕️"
        });
        if (formData.alcohol == 1) {
            recs.push({
                title: "Moderate Alcohol",
                desc: "Limit alcohol consumption to recommended daily limits.",
                icon: "🍷"
            });
        }
    }

    return (
        <div className="bg-secondary-50 dark:bg-slate-800/50 rounded-2xl p-6 shadow-sm border border-secondary-100 dark:border-slate-700/50">
            <h3 className="text-lg font-bold text-surface-900 dark:text-white mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Personalized Health Insights
            </h3>
            <div className="space-y-4">
                {recs.map((rec, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                        <span className="text-2xl bg-white dark:bg-slate-700 p-2 rounded-lg shadow-sm">{rec.icon}</span>
                        <div>
                            <h4 className="font-bold text-surface-900 dark:text-white text-sm">{rec.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{rec.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-lg text-xs border border-blue-100 dark:border-blue-900/30">
                <strong>Disclaimer:</strong> This analysis is AI-generated and for informational purposes only. It does not constitute a medical diagnosis. Please consult a doctor.
            </div>
        </div>
    );
};

export default Recommendations;
