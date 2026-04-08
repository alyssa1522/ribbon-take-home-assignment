import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import ProgressBar from "./components/progressBar";

function App() {
  const [step, setStep] = useState(1);

  // centralized state for all form fields
  const [formData, setFormData] = useState({
    businessName: "",
    fullName: "",
    email: "",
    address: "",
    paymentConfirmed: false,
  });

  function prevStep() {
    setStep(prev => prev - 1);
  }

  function nextStep() {
    setStep(prev => prev + 1);
  }

  return (
    <div className="App">
      <Form
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

function Form({ step, nextStep, prevStep, formData, setFormData }) {
  // hides button on first and last step
  const showPrev = step > 1;
  const showNext = step < 4;

  // maps current step component to step state
  const stepComponents = {
    1: <Step1 formData={formData} setFormData={setFormData} />,
    2: <Step2 formData={formData} setFormData={setFormData} />,
    3: <Step3 formData={formData} />,
    4: <Step4 />,
  };

  function loadStepHeading(step) {
    if (step === 1) return "Business Information";
    if (step === 2) return "Payment";
    if (step === 3) return "Review";
    if (step === 4) return "Registration Complete!";
    return "";
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Ribbon Onboarding</h1>

        <h2>{loadStepHeading(step)}</h2>

        <div className="divider" />

        <div className="progress">
          <ProgressBar step={step} totalSteps={4} />
        </div>

        {stepComponents[step]}
      </div>

      <div className="buttons">
        <div>
          {showPrev && <button onClick={prevStep}>Previous</button>}
        </div>
        <div>
          {showNext && <button onClick={nextStep}>Continue</button>}
        </div>
      </div>
    </div>
  );
}

export default App;