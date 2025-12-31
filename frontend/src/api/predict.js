import axios from "axios";

const API_URL = "https://cardio-backend-bn5k.onrender.com/predict";

export const predictRisk = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};
