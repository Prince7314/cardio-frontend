import { motion } from "framer-motion";

const SelectionGroup = ({ label, options, value, onChange, name }) => {
    return (
        <div className="flex flex-col gap-2">
            {label && <label className="text-sm font-semibold text-slate-300 ml-1">{label}</label>}
            <div className="flex gap-2 bg-surface-dark/50 p-1 rounded-xl border border-white/5">
                {options.map((option) => {
                    // Handle both object options {label, value} and simple strings
                    const optValue = typeof option === 'object' ? option.value : option;
                    const optLabel = typeof option === 'object' ? option.label : option;
                    const isActive = value === optValue;

                    return (
                        <button
                            key={optValue}
                            onClick={() => onChange({ target: { name, value: optValue } })} // Mock event for compatibility
                            className={`relative flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
                            type="button"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId={`selection-${name}`}
                                    className="absolute inset-0 bg-surface-lighter rounded-lg border border-primary/30 shadow-sm"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{optLabel}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SelectionGroup;
