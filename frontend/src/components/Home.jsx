export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-4xl font-bold text-white">
        Predict Heart Disease  
        <span className="text-cyan-400"> Before It Predicts You</span>
      </h2>

      <p className="text-gray-300 text-lg max-w-3xl mx-auto">
        This project uses <b>Machine Learning</b> to analyze health indicators
        such as blood pressure, cholesterol, glucose, BMI, and lifestyle habits
        to predict the risk of cardiovascular disease.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[
          ["🧠 ML Powered", "Random Forest with optimized pipeline"],
          ["⚡ Real-time", "Instant predictions via FastAPI"],
          ["🎯 Accurate", "Balanced & validated model"],
        ].map(([title, desc]) => (
          <div
            key={title}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition"
          >
            <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
            <p className="text-gray-300 mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
