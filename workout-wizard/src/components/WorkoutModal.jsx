import { Modal } from "react-bootstrap";
import "../css/home.css";

const WorkoutModal = ({
  isOpen,
  onClose,
  workoutType,
  color,
  exercises,
  buildSets,
  buildReps,
}) => {
  const modalStyle = {
    backgroundColor: `${color}`,
  };

  const bRadius = {
    borderRadius: "40px",
  };

  const hrStyle = {
    color: "white",
    width: "100%",
  };

  // Retrieve existing data from local storage
  // const existingData = JSON.parse(localStorage.getItem("exerciseData")) || [];

  console.log(exercises);
  console.log(buildReps);
  console.log(buildSets);

  return (
    <Modal show={isOpen} onHide={onClose} centered style={bRadius}>
      <Modal.Header closeButton style={modalStyle}>
        <Modal.Title>{workoutType}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalStyle}>
        {exercises.map((exercise, index) => (
          <div key={index}>
            <h4>{`Workout ${index + 1} - ${exercise.name}`}</h4>
            <p>{`Reps: ${buildReps || "N/A"} Sets: ${buildSets || "N/A"}`}</p>
            <hr style={hrStyle} />
          </div>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default WorkoutModal;
