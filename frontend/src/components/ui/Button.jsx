import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-primary-500/30 ring-offset-white focus:ring-primary-500",
        secondary: "bg-surface-100 hover:bg-surface-200 text-surface-900 border border-surface-200 ring-offset-white focus:ring-surface-300",
        outline: "bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 ring-offset-white focus:ring-primary-500",
        ghost: "bg-transparent text-slate-600 hover:text-primary-600 hover:bg-surface-50",
        glow: "bg-gradient-to-r from-primary-600 to-indigo-500 text-white shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
