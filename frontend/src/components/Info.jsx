export default function Info() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-cyan-400">
        📊 Model & Dataset Information
      </h2>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <InfoCard title="Initial Dataset Size" value="70,000+" desc="Raw patient records collected from public health data." />
        <InfoCard title="Removed Records" value="~1,500" desc="Removed due to missing values, noise, and inconsistencies." />
        <InfoCard title="Final Dataset" value="~68,500" desc="Cleaned and balanced dataset used for training." />
      </div>

      {/* MODEL DETAILS */}
      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard
          title="Algorithm"
          value="Random Forest Classifier"
          desc="Ensemble-based ML algorithm effective for non-linear medical data."
        />

        <InfoCard
          title="Model Accuracy"
          value="~80%"
          desc="Evaluated using ROC-AUC, F1-score, Precision & Recall."
        />

        <InfoCard
          title="Feature Engineering"
          value="BMI + Encodings"
          desc="BMI derived from height & weight; categorical variables encoded."
        />

        <InfoCard
          title="Preprocessing Pipeline"
          value="ColumnTransformer"
          desc="Numerical scaling, categorical encoding & feature selection."
        />
      </div>

      {/* FEATURES */}
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-cyan-400 mb-3">
          ✅ Features Used by Model
        </h3>
        <ul className="grid md:grid-cols-2 gap-2 text-gray-300">
          <li>Age (years)</li>
          <li>Gender</li>
          <li>Height & Weight</li>
          <li>BMI (derived)</li>
          <li>Systolic & Diastolic BP</li>
          <li>Cholesterol Level</li>
          <li>Glucose Level</li>
          <li>Smoking Habit</li>
          <li>Alcohol Consumption</li>
          <li>Physical Activity</li>
        </ul>
      </div>

      {/* REMOVED */}
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-red-400 mb-3">
          ❌ Removed Columns
        </h3>
        <p className="text-gray-300">
          Patient ID, timestamps, duplicated attributes, sparse indicators,
          and high-correlation redundant features.
        </p>
      </div>

      {/* DEPLOYMENT */}
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-3">
          🚀 Deployment Architecture
        </h3>
        <p className="text-gray-300">
          Model trained in Python (scikit-learn), serialized using joblib,
          deployed via FastAPI backend, and consumed by a React + Tailwind
          frontend in real time.
        </p>
      </div>
    </div>
  );
}

function InfoCard({ title, value, desc }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow">
      <h4 className="text-cyan-400 text-lg font-semibold">{title}</h4>
      <p className="text-2xl font-bold text-white mt-2">{value}</p>
      <p className="text-gray-400 mt-1">{desc}</p>
    </div>
  );
}
