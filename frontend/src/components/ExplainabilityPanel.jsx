import React from 'react';

const ExplainabilityPanel = ({ formData }) => {
    // Heuristic-based logic to determine key factors
    // This mocks "SHAP" values by checking against standard medical thresholds.

    const factors = [];

    if (formData.smoking == 1) {
        factors.push({ name: 'Smoking', impact: 'negative', reason: 'Increases arterial stiffness' });
    }
    if (formData.systolic_bp > 130) {
        factors.push({ name: 'Systolic BP', impact: 'negative', reason: 'Above ideal range (>120)' });
    }
    if (formData.cholesterol > 1) {
        factors.push({ name: 'Cholesterol', impact: 'negative', reason: 'Elevated levels detected' });
    }
    if (formData.age > 60) {
        factors.push({ name: 'Age', impact: 'neutral', reason: 'Natural risk increase' });
    }
    if (formData.active == 0) {
        factors.push({ name: 'Inactivity', impact: 'negative', reason: 'Sedentary lifestyle' });
    }
    if (formData.bmi > 25 || (formData.weight / ((formData.height / 100) ** 2)) > 25) {
        factors.push({ name: 'BMI', impact: 'negative', reason: 'Higher body mass index' });
    }

    // Protective/Positive factors
    if (formData.active == 1) {
        factors.push({ name: 'Physical Activity', impact: 'positive', reason: 'Protective against heart disease' });
    }
    if (formData.systolic_bp < 120 && formData.diastolic_bp < 80) {
        factors.push({ name: 'Blood Pressure', impact: 'positive', reason: 'Optimal range' });
    }
    if (formData.smoking == 0) {
        factors.push({ name: 'Non-Smoker', impact: 'positive', reason: 'Significantly lower risk' });
    }

    // Sort: Negative/Neutral first, then Positive
    // Limit to top 4 for UI clarity
    const displayFactors = factors.slice(0, 4);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-surface-200 dark:border-slate-700">
            <h3 className="text-lg font-bold text-surface-900 dark:text-white mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Key Factors Influencing Your Risk
            </h3>
            <div className="grid gap-3">
                {displayFactors.map((factor, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-surface-50 dark:bg-slate-700/50">
                        <div>
                            <p className="font-semibold text-surface-900 dark:text-white">{factor.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{factor.reason}</p>
                        </div>
                        <div className={`flex items-center gap-1 text-sm font-bold 
                            ${factor.impact === 'negative' ? 'text-red-500' :
                                factor.impact === 'positive' ? 'text-green-500' : 'text-slate-400'}`
                        }>
                            {factor.impact === 'negative' && (
                                <>
                                    <span>Risk</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </>
                            )}
                            {factor.impact === 'positive' && (
                                <>
                                    <span>Protective</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </>
                            )}
                            {factor.impact === 'neutral' && <span>Nuetral</span>}
                        </div>
                    </div>
                ))}
                {displayFactors.length === 0 && (
                    <p className="text-sm text-slate-500">No specific dominant risk factors identified.</p>
                )}
            </div>
        </div>
    );
};

export default ExplainabilityPanel;
