import { useState } from "react";

export function useFormValidation(formData) {
  const [errors, setErrors] = useState({});

  const validators = {
    1: () => {
      const newErrors = {};

      if (formData.rejectedBusinessName && !formData.businessName.trim()) {
        newErrors.businessName = "Please pick a new Business Name";
      } else if (!formData.businessName.trim()) {
        newErrors.businessName = "Business Name is required";
      } else if (formData.businessName.trim().toLowerCase() === formData.rejectedBusinessName.toLowerCase()) {
        newErrors.businessName = "This Business Name was already rejected, please choose a different one";
      }

      if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }

      if (!formData.address.trim()) newErrors.address = "Business Address is required";

      return newErrors;
    },
    2: () => {
      const newErrors = {};

      if (!formData.paymentConfirmed) newErrors.paymentConfirmed = "Payment must be confirmed"

      return newErrors;
    },
  };

  function validateStep(step) {
    const validator = validators[step];  // get validator function for current step

    let newErrors;

    if (validator) {
      newErrors = validator();
    } else {
      newErrors = {};  // if no validator for this step
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;  // returns true if there are no errors
  }

  return { errors, validateStep };
}