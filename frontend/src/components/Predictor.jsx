import { useState } from "react";
import { predictRisk } from "../api/predict";
import Gauge from "./Gauge";


import SliderField from "./SliderField";
import SelectField from "./SelectField";
import RiskBar from "./RiskBar";

import { sliderFields } from "../data/formConfig";
import {
  genderOptions,
  levelOptions,
  yesNoOptions,
} from "../data/selectOptions";

export default function Predictor() {
  const [form, setForm] = useState({
    age: 25,
    gender: 1,
    height: 170,
    weight: 65,
    systolic_bp: 120,
    diastolic_bp: 80,
    cholesterol: 1,
    glucose: 1,
    smoking: 0,
    alcohol: 0,
    active: 1,
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await predictRisk(form);
      setResult(res);
    } catch {
      setError("Backend not reachable. Is FastAPI running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      {/* SLIDERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sliderFields.map((field) => (
          <SliderField
            key={field.name}
            {...field}
            value={form[field.name]}
            onChange={handleChange}
          />
        ))}
      </div>

      {/* SELECTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <SelectField label="Gender" name="gender" value={form.gender} options={genderOptions} onChange={handleChange} />
        <SelectField label="Cholesterol Level" name="cholesterol" value={form.cholesterol} options={levelOptions} onChange={handleChange} />
        <SelectField label="Glucose Level" name="glucose" value={form.glucose} options={levelOptions} onChange={handleChange} />
        <SelectField label="Physically Active" name="active" value={form.active} options={yesNoOptions} onChange={handleChange} />
        <SelectField label="Smoking" name="smoking" value={form.smoking} options={yesNoOptions} onChange={handleChange} />
        <SelectField label="Alcohol Consumption" name="alcohol" value={form.alcohol} options={yesNoOptions} onChange={handleChange} />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full mt-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded font-bold"
      >
        {loading ? "Analyzing..." : "Predict Cardio Risk"}
      </button>

      {error && <p className="text-red-400 mt-3 text-center">{error}</p>}

      {result && (
        <div className="mt-6 bg-gray-800 p-6 rounded-xl flex justify-center">
          <Gauge value={result.risk_probability} />
        </div>
      )}

    </div>
  );
}
