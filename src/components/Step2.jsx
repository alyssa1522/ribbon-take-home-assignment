import React from "react";

function Step2({ formData, setFormData, errors }) {
  function confirmPayment() {
    setFormData({ ...formData, paymentConfirmed: true });  // marks payment as confirmed
  }

  let paymentContent;  // variable to show different content before and after confirming payment

  if (formData.paymentConfirmed) {
    paymentContent = <p>Payment Confirmed!</p>;
  } else {
    paymentContent = (
      <div>
        <button onClick={confirmPayment}>Confirm Payment</button>
        {errors.paymentConfirmed && <p className="error">{errors.paymentConfirmed}</p>}
      </div>
    );
  }

  return (
    <div>
      {paymentContent}
    </div>
  );
}

export default Step2;