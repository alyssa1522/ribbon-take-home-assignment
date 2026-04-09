import React from "react";

function Step1({ formData, setFormData, errors }) {
  return (
    <div>
      <label>Business Name</label>
      <input
        type="text"
        placeholder="Business Name"
        value={formData.businessName}
        onChange={e => setFormData({ ...formData, businessName: e.target.value })}
      />
      {errors.businessName && <p className="error">{errors.businessName}</p>}
      <br />
      <label>Full Name</label>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
      />
      {errors.fullName && <p className="error">{errors.fullName}</p>}
      <br />
      <label>Email</label>
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <p className="error">{errors.email}</p>}
      <br />
      <label>Business Address</label>
      <input
        type="text"
        placeholder="Business Address"
        value={formData.address}
        onChange={e => setFormData({ ...formData, address: e.target.value })}
      />
      {errors.address && <p className="error">{errors.address}</p>}
    </div>

  );
}

export default Step1;