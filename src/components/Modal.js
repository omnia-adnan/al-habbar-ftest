import React from "react";

const Modal = ({ isOpen, onClose, formData, setFormData, setErrMsg }) => {
  if (!isOpen) return null;

  const handleSaveAndClose = () => {
    if (!formData.address || !formData.phone) {
      setErrMsg("Please fill in all fields before submitting.");
      return;
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>Enter Details</h2>
        <form>
          <label>Address:</label>
          <input
            type="text"
            value={formData.address || ""}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />

          <label>Phone:</label>
          <input
            type="text"
            value={formData.phone || ""}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </form>
        <button className="save-btn" onClick={handleSaveAndClose}>
          Save & Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
