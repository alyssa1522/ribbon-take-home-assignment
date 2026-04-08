import React from "react";

function Step1({ formData, setFormData }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Business Name"
        value={formData.businessName}
        onChange={e => setFormData({ ...formData, businessName: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Business Address"
        value={formData.address}
        onChange={e => setFormData({ ...formData, address: e.target.value })}
      />
    </div>
  );
}

export default Step1;