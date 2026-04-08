import React from "react";

function ProgressBar({ step, totalSteps }) {
  return (
    <div>
      <p>
        Step {step} of {totalSteps}
      </p>
    </div>
  );
}

export default ProgressBar;