import React from "react";

const ModalForm = ({ formData, setFormData }) => {
  return (
    <form>
      <label>Name:</label>
      <input
        type="text"
        value={formData.name || ""}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <label>Email:</label>
      <input
        type="text"
        value={formData.email || ""}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </form>
  );
};

export default ModalForm;
