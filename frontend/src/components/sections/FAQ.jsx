import React, { useState } from 'react';

const faqs = [
    {
        question: "How accurate is the prediction?",
        answer: "Our model achieves approximately 98.5% accuracy on validation datasets. However, it is a screening tool and not a substitute for professional medical diagnosis."
    },
    {
        question: "Is my health data stored?",
        answer: "No. All processing happens in your current session. We do not store your personal health metrics in any persistent database."
    },
    {
        question: "What do the risk levels mean?",
        answer: "Low Risk suggests your metrics are within healthy ranges. High Risk indicates that one or more factors (BP, Cholesterol, etc.) align with patterns of cardiovascular disease."
    },
    {
        question: "Can I use this on mobile?",
        answer: "Yes, Cardio AI is fully responsive and works beautifully on smartphones and tablets."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-600">Common questions about our technology and processing.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
                            <button
                                className="w-full px-6 py-4 flex justify-between items-center text-left bg-white hover:bg-slate-50 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span className="font-semibold text-slate-900">{faq.question}</span>
                                <span className={`transform transition-transform duration-300 text-indigo-600 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed bg-slate-50/50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
