import React from 'react';

const testimonials = [
    {
        name: "Dr. Sarah Chen",
        role: "Cardiologist",
        content: "An impressive implementation of predictive AI. The explainability layer is particularly valuable for patient education."
    },
    {
        name: "James Wilson",
        role: "Patient",
        content: "Easy to use and the results were very clear. It helped me realize I needed to focus on lowering my cholesterol."
    },
    {
        name: "TechHealth Daily",
        role: "Review",
        content: "Cardio AI sets a new standard for accessible medical interface design. Clean, fast, and respectful of privacy."
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Trusted by Experts & Users</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="flex gap-1 text-yellow-500 mb-4">★★★★★</div>
                            <p className="text-slate-300 mb-6 leading-relaxed">"{t.content}"</p>
                            <div>
                                <div className="font-bold text-white">{t.name}</div>
                                <div className="text-sm text-indigo-400">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
