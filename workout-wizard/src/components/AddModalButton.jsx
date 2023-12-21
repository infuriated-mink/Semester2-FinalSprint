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

  // const handleAddExercise = (newExercise) => {
  //   // Pass the selectedDay property when adding a new exercise
  //   onAddExercise(newExercise);
  //   closeModal();
  // };

  return (
    <div>
      <button onClick={openModal} className="add-button-big">
        <img src={bigPlus} alt="+" width="65%" />
      </button>

      {isModalOpen && (
        <ExerciseModal
          isOpen={isModalOpen}
          onClose={closeModal}
          // onAddExercise={handleAddExercise}
        />
      )}
    </div>
  );
};

export default AddModalButton;
