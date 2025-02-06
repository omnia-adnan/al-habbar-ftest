import React from "react";

const DataCard = ({ formData }) => {
  return (
    <div className="data-card">
      <h2>Type of submission:</h2>
      {/* The type of submission should be viewed in the p-tag below */}
      <p></p>
      <h3>Card Details:</h3>
      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Address:</strong> {formData.address}
      </p>
      <p>
        <strong>Phone:</strong> {formData.phone}
      </p>
    </div>
  );
};

export default DataCard;
