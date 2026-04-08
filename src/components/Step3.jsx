import React from "react";

function Step3({ formData }) {
  return (
    <div>
      <p><strong>Business Name:</strong> {formData.businessName}</p>
      <br />
      <p><strong>Full Name:</strong> {formData.fullName}</p>
      <br />
      <p><strong>Email:</strong> {formData.email}</p>
      <br />
      <p><strong>Address:</strong> {formData.address}</p>
      <br />
      <p><strong>Payment:</strong> {formData.paymentConfirmed ? "Confirmed" : "Not Confirmed"}</p>
    </div>
  );
}

export default Step3;