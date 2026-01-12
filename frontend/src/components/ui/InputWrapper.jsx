const InputWrapper = ({ label, error, children, className = "" }) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <label className="text-sm font-semibold text-gray-300 ml-1">
                    {label}
                </label>
            )}
            {children}
            {error && (
                <span className="text-sm text-red-400 mt-1 ml-1 animate-pulse">
                    {error}
                </span>
            )}
        </div>
    );
};

export default InputWrapper;
