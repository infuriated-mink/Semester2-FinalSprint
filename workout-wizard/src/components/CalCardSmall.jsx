import React, { useState } from "react";
import lilCheck from "../images/little-check.png";
import bigPlus from "../images/big-plus.png";
import WorkoutModal from "./WorkoutModal";

const CalCardSmall = ({ text, color, exercises, sets, reps }) => {
  const [isCheckClicked, setIsCheckClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const smallCardStyle = {
    backgroundColor: `${color}`,
    margin: "20px 1px 1px 1px",
    height: "40px",
    minWidth: "126px",
    borderRadius: "12px",
    boxShadow: "0px 4px 3px #888888",
  };

  const checkButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgb(245, 245, 245)",
    height: "20px",
    width: "20px",
    marginRight: "10px",
    padding: "5px",
    border: isCheckClicked ? "1px solid gray" : "none",
    borderRadius: "50%",
    boxShadow: isCheckClicked ? "none" : "0px 2px 2px rgba(0, 0, 0, 0.381",
    opacity: isCheckClicked ? "75%" : "100%",
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="sm-card-flex" style={smallCardStyle}>
        <p className="sm-card-font">{text}</p>
        <div className="sm-card-right-side">
          <button
            className="sm-btn"
            type="button"
            style={checkButtonStyle}
            onClick={() => setIsCheckClicked(!isCheckClicked)}
          >
            <img src={lilCheck} alt="-" width="15px" height="15px" />
          </button>
          <button
            className="sm-btn"
            type="button"
            onClick={() => {
              openModal();
            }}
          >
            <img src={bigPlus} alt="+" width="15px" height="15px" />
          </button>
        </div>
      </div>
      <WorkoutModal
        isOpen={isModalOpen}
        onClose={closeModal}
        workoutType={text}
        color={color}
        exercises={exercises}
        buildSets={sets}
        buildReps={reps}
      />
    </div>
  );
};

export default CalCardSmall;
