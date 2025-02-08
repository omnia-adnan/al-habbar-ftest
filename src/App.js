import React, { useState, useEffect } from "react";
import Modal from "./components/Modal";
import MainForm from "./components/MainForm";
import DataCard from "./components/DataCard";
import mockData from "./data/mockData";

const App = () => {
  const [formData, setFormData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const manualSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.phone
    ) {
      setErrMsg("Please fill in all fields before submitting.");
      return;
    }else{
      setSubmittedData([...submittedData, {...formData, type: "Manual Submission"}]);
      setFormData({});
    }
  };

  const autoSubmit = () => {
      setSubmittedData([...submittedData, {...mockData, type: "Automatic Submission"}]);
  };
  

  useEffect(() => {
    if (errMsg || successMsg) {
      const timer = setTimeout(() => {
        setErrMsg("");
        setSuccessMsg("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errMsg, successMsg]);

  return (
    <div className="container">
      <img src="/logo.png" alt="Logo" className="logo-style" />

      <div className="sub-container">
        {errMsg && <p className="error-message">{errMsg}</p>}
        {successMsg && <p className="success-message">{successMsg}</p>}
        <h2>Main Form</h2>
        <MainForm formData={formData} setFormData={setFormData} />

        <button className="w-100" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          formData={formData}
          setFormData={setFormData}
          setErrMsg={setErrMsg}
        />

        <div>
          <button onClick={autoSubmit}> Automatic Submit </button>
          <button onClick={manualSubmit}>Manual Submit</button>
        </div>
        </div>

      <div className="cards-container">
        {submittedData.map((data, index) => (
          <DataCard key={index} formData={data} />
        ))}
      </div>
    </div>
  );
};

export default App;
