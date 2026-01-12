import React from 'react';

const ModelTransparency = () => {
    return (
        <div className="max-w-4xl mx-auto mt-16 border-t border-surface-200 dark:border-slate-700 pt-12">
            <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Model Transparency</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                    <div className="text-2xl font-bold text-surface-900 dark:text-white">Ensemble</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Architecture</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-surface-900 dark:text-white">70,000+</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Clinical Records</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-surface-900 dark:text-white">Active</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Validation Status</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-surface-900 dark:text-white">v1.2.0</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Model Version</div>
                </div>
            </div>
        </div>
    );
};

export default ModelTransparency;
