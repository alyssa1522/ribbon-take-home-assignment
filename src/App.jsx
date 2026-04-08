import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import ProgressBar from "./components/progressBar";
import { useFormValidation } from "./hooks/useFormValidation";

function App() {
  const [step, setStep] = useState(1);

  // centralized state for all form fields
  const [formData, setFormData] = useState({
    businessName: "",
    fullName: "",
    email: "",
    address: "",
    paymentConfirmed: false,
    rejected: false,
    rejectedBusinessName: "",  // tracks rejected name so user cant reuse it 
  });

  const { errors, validateStep } = useFormValidation(formData);

  function prevStep() {
    setStep(prev => prev - 1);
  }

  function nextStep() {
    setStep(prev => prev + 1);
  }

  function handleNext() {
    if (step === 3) {
      // first submit is always rejected, then approved after name change
      const isRejected = !formData.rejected;
      setFormData({ ...formData, rejected: isRejected });
      nextStep();
    } else if (validateStep(step)) {
      // only go to next step if current step passes validation
      nextStep();
    }
  }

  // function to clear business name and save the rejected one, then send the user back to step 1
  function handleRejection() {
    setFormData({ ...formData, businessName: "", rejectedBusinessName: formData.businessName });
    setStep(1);
  }

  return (
    <div className="App">
      <Form
        step={step}
        handleNext={handleNext}
        prevStep={prevStep}
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        handleRejection={handleRejection}
      />
    </div>
  );
}

function Form({ step, handleNext, prevStep, formData, setFormData, errors, handleRejection }) {
  // hides button on first and last step
  const showPrev = step > 1 && step < 4;
  const showNext = step < 4;

  // maps current step component to step state
  const stepComponents = {
    1: <Step1 formData={formData} setFormData={setFormData} errors={errors} />,
    2: <Step2 formData={formData} setFormData={setFormData} errors={errors} />,
    3: <Step3 formData={formData} />,
    4: <Step4 rejected={formData.rejected} handleRejection={handleRejection} />,
  };

  function loadStepHeading(step) {
    if (step === 1) return "Business Information";
    if (step === 2) return "Payment";
    if (step === 3) return "Review";
    if (step === 4) return formData.rejected ? "Registration Status" : "Registration Complete!";
    return "";
  }

  let nextButton;
  // step 3's next button says Submit
  if (step === 3) {
    nextButton = <button onClick={handleNext}>Submit</button>;
  } else if (showNext) {
    nextButton = <button onClick={handleNext}>Continue</button>;
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
          {nextButton}
        </div>
      </div>
    </div>
  );
}

export default App;