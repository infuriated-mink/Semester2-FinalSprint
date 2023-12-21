import React, { useState } from "react";
import "../css/ProfileDescriptionBox.css";

const ProfileDescriptionBox = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the entered information in local storage
    localStorage.setItem("userHeight", height);
    localStorage.setItem("userWeight", weight);
    localStorage.setItem("userDescription", description);
  };

  return (
    <div>
      <h2>Tell Us about Yourself!</h2>
      <form onSubmit={handleSubmit}>
        <div className="heightBox">
          <label>
            Height:
            <input
              className="HWtextarea"
              type="text"
              value={height}
              onChange={handleHeightChange}
            />
          </label>
        </div>
        <div className="heightBox">
          <label>
            Weight:
            <input
              className="HWtextarea"
              type="text"
              value={weight}
              onChange={handleWeightChange}
            />
          </label>
        </div>
        <div className="descBox">
          <label>
            Short Description:
            <textarea
              className="descriptiontextarea"
              value={description}
              onChange={handleDescriptionChange}
            />
          </label>
        </div>
        <button type="submit" className="saveButton">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileDescriptionBox;
