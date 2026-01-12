import React from 'react';

const RangeSlider = ({ label, name, min, max, value, onChange, unit }) => {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-slate-700">{label}</label>
                <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-lg text-sm font-bold font-mono">
                    {value || min} <span className="text-xs text-primary-400 font-normal ml-0.5">{unit}</span>
                </div>
            </div>

            <div className="relative h-6 flex items-center">
                {/* Track */}
                <div className="absolute w-full h-2 bg-surface-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary-500 transition-all duration-75 ease-out"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>

                {/* Custom Slider Input */}
                <input
                    type="range"
                    name={name}
                    min={min}
                    max={max}
                    value={value || min}
                    onChange={onChange}
                    className="absolute w-full h-full opacity-0 cursor-pointer"
                />

                {/* Custom Thumb (Visual Only - positioned by percentage) */}
                <div
                    className="absolute h-6 w-6 bg-white border-2 border-primary-500 rounded-full shadow-md pointer-events-none transition-all duration-75 ease-out flex items-center justify-center"
                    style={{ left: `calc(${percentage}% - 12px)` }}
                >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
            </div>

            <div className="flex justify-between mt-2 text-xs text-slate-400 font-medium font-mono">
                <span>{min} {unit}</span>
                <span>{max} {unit}</span>
            </div>
        </div>
    );
};

export default RangeSlider;
