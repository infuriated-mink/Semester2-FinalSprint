import { useState } from "react";
import ExerciseModal from "./ExerciseModal";
import { Button } from "react-bootstrap";
import bigPlus from "../images/big-plus.png";

const AddModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    setIsModalOpen(false);
  };

  // const handleClick = (e) => {
  //   e.stopPropagation();
  // };

  return (
    <div>
      <button onClick={openModal} className="add-button-big">
        <img src={bigPlus} alt="+" width="65%" />
      </button>

      {isModalOpen && (
        <ExerciseModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default AddModalButton;
