import React from "react";

const CalCardSmall = ({ text, color }) => {
  const smallCardStyle = {
    backgroundColor: `${color}`,
    margin: "20px 1px 1px 1px",
    height: "40px",
    minWidth: "126px",
    borderRadius: "12px",
    boxShadow: "0px 4px 3px #888888",
  };
  return (
    <div className="sm-card-flex" style={smallCardStyle}>
      <p className="sm-card-font">{text}</p>
      <div className="sm-card-right-side">
        <div className="sm-btn"></div>
        <div className="sm-btn"></div>
      </div>
    </div>
  );
};

export default CalCardSmall;
