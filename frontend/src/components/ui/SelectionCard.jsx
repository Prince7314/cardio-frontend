import React from 'react';

const SelectionCard = ({ label, icon, selected, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 w-full h-full
                ${selected
                    ? 'border-primary-500 bg-primary-50/50 shadow-md transform -translate-y-1'
                    : 'border-surface-200 bg-white hover:border-primary-200 hover:shadow-sm'
                }
            `}
        >
            <div className={`
                mb-3 p-3 rounded-full transition-colors duration-300
                ${selected ? 'bg-primary-100 text-primary-600' : 'bg-surface-100 text-slate-500'}
            `}>
                {icon}
            </div>
            <span className={`font-semibold text-center ${selected ? 'text-primary-700' : 'text-slate-600'}`}>
                {label}
            </span>

            {/* Selected Checkmark Indicator */}
            {selected && (
                <div className="absolute top-3 right-3 text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </div>
            )}
        </button>
    );
};

export default SelectionCard;
