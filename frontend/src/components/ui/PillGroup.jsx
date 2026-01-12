import React from 'react';

const PillGroup = ({ label, name, options, value, onChange }) => {
    return (
        <div className="mb-6">
            <label className="block text-sm font-bold text-slate-700 mb-3">{label}</label>
            <div className="flex flex-wrap gap-2 p-1 bg-surface-100 rounded-xl">
                {options.map((option) => {
                    const isSelected = value == option.value;
                    return (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => onChange({ target: { name, value: option.value } })}
                            className={`
                                flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                                ${isSelected
                                    ? 'bg-white text-primary-600 shadow-sm ring-1 ring-black/5'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                                }
                            `}
                        >
                            {option.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default PillGroup;
