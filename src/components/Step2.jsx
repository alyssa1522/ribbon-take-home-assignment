import React from "react";

function Step2({ formData, setFormData }) {
  function confirmPayment() {
    setFormData({ ...formData, paymentConfirmed: true });
  }

  let paymentContent;

  if (formData.paymentConfirmed) {
    paymentContent = <p>Payment Confirmed</p>;
  } else {
    paymentContent = <button onClick={confirmPayment}>Confirm Payment</button>;
  }

  return (
    <div>
      {paymentContent}
    </div>
  );
}

export default Step2;