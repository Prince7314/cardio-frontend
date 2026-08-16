# ❤️ Cardio Risk Prediction – Full Stack ML Project

A **full-stack machine learning web application** that predicts **cardiovascular disease risk** using a trained **Random Forest model**, deployed with **FastAPI** and a modern **React + Tailwind CSS** frontend.

This project demonstrates a **complete ML deployment pipeline**:
Model → API → Frontend → Visualization.

---

## Backend
 - Run ipynb file and make pkl file
 - Open cmd in backend and run this code
 # python -m pip install -r requirements.txt
 -Then to make api run this
 # python -m uvicorn app:app --reload

## Frontend
 - Open Cmd in frontend and run following code
 - run code to make react
 - then download tailwind css
 - change src folder with this folder
 - replace both config file
 - Then after run backend run this code
 # npm run dev


## 📌 Features

### 🔹 Machine Learning
- Random Forest Classifier
- Full preprocessing pipeline (ColumnTransformer)
- Probability-based risk prediction
- BMI calculated automatically in backend

### 🔹 Backend (FastAPI)
- `/predict` REST API
- Automatic Swagger documentation
- Input validation
- CORS enabled
- Single-file backend for simplicity

### 🔹 Frontend (React + Tailwind)
- Dark, modern UI
- Sliders for Age, Height, Weight, Blood Pressure
- Dropdowns for Gender, Cholesterol, Glucose
- Risk probability bar chart
- Prediction history (multiple tests)
- Loading & error handling

---

## 📂 Project Structure

Cardio Final Project/
│
├── backend/
│ ├── app.py # FastAPI backend (single file)
│ ├── rf_pipeline.pkl # Trained ML pipeline
│ └── requirements.txt # Python dependencies
│
├── frontend/
│ ├── src/
│ │ ├── components/ # UI components (Slider, Select, Chart)
│ │ ├── data/ # Form configs & options
│ │ ├── api/ # API connection
│ │ ├── App.jsx # Main UI
│ │ └── index.css
│ │
│ ├── package.json
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ └── vite.config.js
│
└── README.md


---

## ⚙️ Requirements

### Backend
- Python **3.10 – 3.12** (recommended: 3.11)
- pip

### Frontend
- Node.js **18+ (LTS recommended)**
- npm

---

## 🚀 How to Run the Project

### 1️⃣ Backend Setup (FastAPI)

```bash
cd backend
pip install -r requirements.txt

If pip fails:

python -m pip install -r requirements.txt


Run backend:

uvicorn app:app --reload


Backend URL:

http://127.0.0.1:8000


Swagger UI:

http://127.0.0.1:8000/docs

2️⃣ Frontend Setup (React)
cd frontend
npm install
npm run dev

🔁 Application Flow
User Input (React UI)
        ↓
FastAPI /predict
        ↓
ML Pipeline (Preprocessing + RandomForest)
        ↓
Risk Probability (%)
        ↓
Chart + Result + History

📊 Input Encoding (Important)
Gender

Male → 1

Female → 2

Cholesterol / Glucose

Normal → 1

High → 2

Very High → 3

Binary Inputs

Smoking, Alcohol, Physically Active

No → 0

Yes → 1

UI shows labels, backend receives numeric values.

🧠 Important Notes

Model expects exact feature names

BMI is calculated inside backend

Do NOT rename frontend fields

Use same Python version for training & deployment

🧪 Example Low-Risk Test Case
Age: 25
Gender: Male
Height: 170 cm
Weight: 65 kg
Blood Pressure: 118 / 78
Cholesterol: Normal
Glucose: Normal
Smoking: No
Alcohol: No
Physically Active: Yes


Expected Output: LOW RISK

🛠 Troubleshooting
Backend error: columns are missing

Ensure backend app.py is unchanged

Ensure frontend sends all inputs

Tailwind / PostCSS error

postcss.config.js must be inside frontend/

Tailwind CSS version 3.x recommended

npm permission error (Windows)

Run PowerShell as Administrator

Or use Command Prompt instead

🚀 Future Enhancements

SHAP explainability

Gauge (speedometer) chart

Save history to database

Authentication

Cloud deployment (Render + Vercel)

👨‍💻 Author

Prince Bhanderi
Computer Science & Machine Learning Enthusiast

📜 License

This project is for educational and portfolio purposes.
