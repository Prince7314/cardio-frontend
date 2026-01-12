import React, { useEffect, useState } from 'react';

const RiskGauge = ({ probability, prediction }) => {
    const [animatedProb, setAnimatedProb] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedProb(probability);
        }, 300);
        return () => clearTimeout(timer);
    }, [probability]);

    // Determine risk level and color
    let riskLevel = 'Low Risk';
    let colorClass = 'text-green-500';
    let strokeClass = 'stroke-green-500';

    if (prediction === 1) { // High Risk Prediction
        if (probability > 80) {
            riskLevel = 'High Risk';
            colorClass = 'text-red-500';
            strokeClass = 'stroke-red-500';
        } else {
            riskLevel = 'Moderate Risk';
            colorClass = 'text-yellow-500';
            strokeClass = 'stroke-yellow-500';
        }
    } else if (probability > 30) {
        // Even if prediction is 0, higher probability might indicate moderate
        riskLevel = 'Moderate Risk';
        colorClass = 'text-yellow-500';
        strokeClass = 'stroke-yellow-500';
    }


    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    // We only want semi-circle (half circumference)
    const arcLength = circumference / 2;
    // Calculate stroke dash offset
    // Range is 0 to 100.
    // 0% -> offset = circumference (full circle hidden) -> actually we want semi circle hidden.
    // Logic for semi circle gauge:
    // stroke-dasharray: circumference
    // stroke-dashoffset: circumference - (percent / 100) * (circumference / 2) ???
    // A simpler way for semi-circle:
    // Rotate -180deg.
    // Stroke dasharray = circumference / 2 (visible part) + circumference / 2 (gap).

    // Simpler approach: Standard Circle, cut off bottom.
    const normalizedProb = probability;
    const dashOffset = circumference - (normalizedProb / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 flex items-center justify-center">
                {/* SVG Gauge */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                    <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        className="stroke-surface-200 dark:stroke-slate-700"
                        strokeWidth="15"
                    />
                    <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        className={`${strokeClass} transition-all duration-1000 ease-out`}
                        strokeWidth="15"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (animatedProb / 100) * circumference}
                        strokeLinecap="round"
                    />
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        Confidence
                    </span>
                    <span className={`text-5xl font-bold ${colorClass}`}>
                        {animatedProb}%
                    </span>
                    <span className={`mt-2 px-3 py-1 rounded-full text-xs font-bold bg-opacity-10 ${colorClass.replace('text-', 'bg-')} ${colorClass}`}>
                        {riskLevel}
                    </span>
                </div>
            </div>
            <p className="text-center text-slate-600 dark:text-slate-400 max-w-xs mt-[-20px]">
                {prediction === 1
                    ? "Our models indicate a higher likelihood of cardiovascular issues."
                    : "Your vitals suggest a healthy heart profile."}
            </p>
        </div>
    );
};

export default RiskGauge;
