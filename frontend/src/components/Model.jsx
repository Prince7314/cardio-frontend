import Predictor from "./Predictor";

export default function Model() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-cyan-400 text-center mb-4">
        🧪 Cardio Risk Prediction Model
      </h2>

      <p className="text-center text-gray-300 mb-8">
        Interactive machine learning model trained on real-world health data.
      </p>

      <div className="border border-cyan-400/30 rounded-xl shadow-[0_0_30px_#22d3ee55]">
        <Predictor />
      </div>
    </div>
  );
}
