import React, { useState } from "react";
import Form from "./components/Form";
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

export default App;