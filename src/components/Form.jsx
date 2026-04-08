import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ProgressBar from "./progressBar";

function Form({ step, handleNext, prevStep, formData, setFormData, errors, handleRejection }) {
  // hides respective buttons on first and last step
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

export default Form;
