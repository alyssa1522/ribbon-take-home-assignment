import React from "react";

function ProgressBar({ step, totalSteps }) {
  const stepNames = ["Business Info", "Payment", "Review", "Complete"];
  return (
    <div>
      <p>
        Step {step} of {totalSteps}: {stepNames[step - 1]}
      </p>
    </div>
  );
}

export default ProgressBar;