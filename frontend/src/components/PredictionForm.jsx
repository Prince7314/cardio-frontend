import React, { useState } from 'react';
import Button from './ui/Button';
import SelectionCard from './ui/SelectionCard';
import PillGroup from './ui/PillGroup';
import RangeSlider from './ui/RangeSlider';
import RiskGauge from './ui/RiskGauge';
import ExplainabilityPanel from './ExplainabilityPanel';
import Recommendations from './Recommendations';
import ModelTransparency from './ModelTransparency';
import confetti from 'canvas-confetti';

const steps = [
    { id: 1, title: 'Vitals', icon: '❤️' },
    { id: 2, title: 'Clinical', icon: '🔬' },
    { id: 3, title: 'Habits', icon: '🌿' },
    { id: 4, title: 'Review', icon: '📋' }
];

const PredictionForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        age: 45, gender: 1, height: 170, weight: 70,
        systolic_bp: 120, diastolic_bp: 80,
        cholesterol: 1, glucose: 1,
        smoking: 0, alcohol: 0, active: 1
    });

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    // Derived BMI for display
    const bmi = (formData.weight / ((formData.height / 100) ** 2)).toFixed(1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectionChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://cardio-backend-1.onrender.com/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            setResult(data);

            // Scroll to top of results
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (data.prediction === 0) {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#4f46e5', '#22d3ee', '#ffffff']
                });
            }
        } catch (error) {
            console.error('Prediction failed:', error);
            alert('Failed to get prediction. Ensure backend is running.');
        } finally {
            setLoading(false);
        }
    };

    const resetAssessment = () => {
        setResult(null);
        setCurrentStep(1);
        setFormData({
            age: 45, gender: 1, height: 170, weight: 70,
            systolic_bp: 120, diastolic_bp: 80,
            cholesterol: 1, glucose: 1,
            smoking: 0, alcohol: 0, active: 1
        });
    };

    // Render Logic
    if (result) {
        return (
            <section className="py-16 bg-surface-50 dark:bg-surface-900 min-h-screen transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <Button variant="secondary" onClick={resetAssessment} className="text-sm">
                            ← Start New Assessment
                        </Button>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden mb-8 border border-surface-200 dark:border-slate-700">
                        <div className="p-8 md:p-12 text-center border-b border-surface-100 dark:border-slate-700 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>

                            <h2 className="text-3xl font-bold text-surface-900 dark:text-white mb-8 relative z-10">Assessment Results</h2>

                            <div className="mb-8 relative z-10">
                                <RiskGauge probability={result.risk_probability} prediction={result.prediction} />
                            </div>
                        </div>

                        <div className="p-8 md:p-12 bg-surface-50 dark:bg-slate-900/50">
                            <div className="grid md:grid-cols-2 gap-8">
                                <ExplainabilityPanel formData={formData} />
                                <Recommendations formData={formData} />
                            </div>
                            <ModelTransparency />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="predict" className="py-24 relative bg-surface-50 dark:bg-surface-900 transition-colors duration-300 min-h-screen flex flex-col justify-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                opacity: 0.1
            }}></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-surface-900 dark:text-white mb-4 tracking-tight">Check Your Heart Health</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        AI-powered medical-grade risk assessment.
                    </p>
                </div>

                {/* Wizard Progress Bar */}
                <div className="mb-8 max-w-2xl mx-auto">
                    <div className="flex justify-between relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-200 dark:bg-slate-700 -z-10 transform -translate-y-1/2 rounded-full"></div>
                        <div
                            className="absolute top-1/2 left-0 h-1 bg-primary-500 -z-10 transform -translate-y-1/2 rounded-full transition-all duration-500"
                            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                        ></div>

                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col items-center gap-2 bg-surface-50 dark:bg-surface-900 px-2">
                                <div className={`
                                    w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300
                                    ${currentStep >= step.id
                                        ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-500/30'
                                        : 'bg-white dark:bg-slate-800 border-surface-300 dark:border-slate-600 text-slate-400 dark:text-slate-500'}
                                `}>
                                    {currentStep > step.id ? '✓' : step.id}
                                </div>
                                <span className={`text-xs font-semibold ${currentStep >= step.id ? 'text-primary-700 dark:text-primary-400' : 'text-slate-400 dark:text-slate-600'}`}>
                                    {step.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-surface-200 dark:border-slate-700 p-8 md:p-12 transition-all duration-500">
                    <form onSubmit={(e) => e.preventDefault()}>

                        {/* STEP 1: VITALS */}
                        {currentStep === 1 && (
                            <div className="animate-fade-in-up">
                                <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
                                    <span className="text-3xl">❤️</span> Vitals & Demographics
                                </h3>

                                <div className="mb-8 flex justify-center">
                                    <div className="flex gap-4 w-full max-w-md">
                                        <button
                                            type="button"
                                            onClick={() => handleSelectionChange('gender', 2)}
                                            className={`flex-1 py-3 px-4 rounded-xl border-2 text-sm font-bold transition-all ${formData.gender == 2 ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-surface-200 dark:border-slate-600 hover:border-surface-300 text-slate-600 dark:text-slate-300'}`}
                                        >
                                            Male
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleSelectionChange('gender', 1)}
                                            className={`flex-1 py-3 px-4 rounded-xl border-2 text-sm font-bold transition-all ${formData.gender == 1 ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-surface-200 dark:border-slate-600 hover:border-surface-300 text-slate-600 dark:text-slate-300'}`}
                                        >
                                            Female
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-6 max-w-lg mx-auto">
                                    <RangeSlider label="Age" name="age" min={20} max={100} value={formData.age} onChange={handleChange} unit="yrs" />
                                    <RangeSlider label="Height" name="height" min={120} max={220} value={formData.height} onChange={handleChange} unit="cm" />
                                    <RangeSlider label="Weight" name="weight" min={40} max={150} value={formData.weight} onChange={handleChange} unit="kg" />
                                    <div className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400">
                                        Calculated BMI: <span className="text-primary-600 dark:text-primary-400">{bmi}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: CLINICAL */}
                        {currentStep === 2 && (
                            <div className="animate-fade-in-up">
                                <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
                                    <span className="text-3xl">🔬</span> Clinical Indicators
                                </h3>
                                <div className="space-y-8 max-w-lg mx-auto">
                                    <RangeSlider label="Systolic BP" name="systolic_bp" min={90} max={200} value={formData.systolic_bp} onChange={handleChange} unit="mmHg" />
                                    <RangeSlider label="Diastolic BP" name="diastolic_bp" min={60} max={120} value={formData.diastolic_bp} onChange={handleChange} unit="mmHg" />

                                    <div className="pt-6 border-t border-surface-200 dark:border-slate-700">
                                        <PillGroup
                                            label="Cholesterol Level"
                                            name="cholesterol"
                                            options={[{ value: 1, label: 'Normal' }, { value: 2, label: 'Above Normal' }, { value: 3, label: 'High' }]}
                                            value={formData.cholesterol}
                                            onChange={handleChange}
                                        />
                                        <PillGroup
                                            label="Glucose Level"
                                            name="glucose"
                                            options={[{ value: 1, label: 'Normal' }, { value: 2, label: 'Above Normal' }, { value: 3, label: 'High' }]}
                                            value={formData.glucose}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: HABITS */}
                        {currentStep === 3 && (
                            <div className="animate-fade-in-up">
                                <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
                                    <span className="text-3xl">🌿</span> Lifestyle & Habits
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <SelectionCard
                                        label="Smoker"
                                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                                        selected={formData.smoking == 1}
                                        onClick={() => handleSelectionChange('smoking', formData.smoking == 1 ? 0 : 1)}
                                    />
                                    <SelectionCard
                                        label="Alcohol"
                                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547" /></svg>}
                                        selected={formData.alcohol == 1}
                                        onClick={() => handleSelectionChange('alcohol', formData.alcohol == 1 ? 0 : 1)}
                                    />
                                    <SelectionCard
                                        label="Active"
                                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01" /></svg>}
                                        selected={formData.active == 1}
                                        onClick={() => handleSelectionChange('active', formData.active == 1 ? 0 : 1)}
                                    />
                                </div>
                            </div>
                        )}

                        {/* STEP 4: REVIEW */}
                        {currentStep === 4 && (
                            <div className="animate-fade-in-up">
                                <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
                                    <span className="text-3xl">📋</span> Review & Predict
                                </h3>
                                <div className="bg-surface-50 dark:bg-slate-700/50 rounded-2xl p-6 max-w-lg mx-auto mb-8 border border-surface-200 dark:border-slate-600">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div><span className="text-slate-500 dark:text-slate-400">Age:</span> <b className="text-surface-900 dark:text-white">{formData.age} yrs</b></div>
                                        <div><span className="text-slate-500 dark:text-slate-400">Gender:</span> <b className="text-surface-900 dark:text-white">{formData.gender == 2 ? 'Male' : 'Female'}</b></div>
                                        <div><span className="text-slate-500 dark:text-slate-400">BMI:</span> <b className="text-surface-900 dark:text-white">{bmi}</b></div>
                                        <div><span className="text-slate-500 dark:text-slate-400">BP:</span> <b className="text-surface-900 dark:text-white">{formData.systolic_bp}/{formData.diastolic_bp}</b></div>
                                        <div><span className="text-slate-500 dark:text-slate-400">Smoker:</span> <b className="text-surface-900 dark:text-white">{formData.smoking == 1 ? 'Yes' : 'No'}</b></div>
                                        <div><span className="text-slate-500 dark:text-slate-400">Active:</span> <b className="text-surface-900 dark:text-white">{formData.active == 1 ? 'Yes' : 'No'}</b></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-12 pt-6 border-t border-surface-200 dark:border-slate-700">
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                className={currentStep === 1 ? 'opacity-0 cursor-default' : ''}
                            >
                                Back
                            </Button>

                            {currentStep < 4 ? (
                                <Button type="button" variant="primary" onClick={nextStep} className="px-8">
                                    Next Step →
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    variant="primary"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="px-8 shadow-lg shadow-primary-500/30"
                                >
                                    {loading ? 'Analyzing...' : 'Run Analysis ✨'}
                                </Button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PredictionForm;
