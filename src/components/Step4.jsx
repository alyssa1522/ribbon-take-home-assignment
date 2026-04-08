import React from "react";

function Step4({ rejected, handleRejection }) {
  // show rejection message or success message depending on registration status
  let message;

  // if rejected, button sends user back to step 1
  if (rejected) {
    message = (
      <div>
        <p>Registration rejected: business name conflicts with an existing registration.</p>
        <br />
        <button onClick={handleRejection}>Change Business Name</button>
      </div>
    );
  } else {
    // success after changing the business name
    message = (
      <div>
        <p>Thank you for completing the Ribbon onboarding form.</p>
      </div>
    );
  }

  return (
    <div>
      {message}
    </div>
  );
}

export default Step4;