import React from "react";

export const Input = ({ handleChange }) => {
  return (
    <input
      type="text"
      id="name"
      name="name"
      required
      minLength="4"
      maxLength="8"
      size="10"
      onChange={handleChange}
    />
  );
};
