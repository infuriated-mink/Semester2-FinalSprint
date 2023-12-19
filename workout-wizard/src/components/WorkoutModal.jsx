import { Modal } from "react-bootstrap";
import "../css/home.css";

const WorkoutModal = ({ isOpen, onClose, workoutType, color }) => {
  const ModalStyle = {
    backgroundColor: `${color}`,
  };

  const bRadius = {
    borderRadius: "40px",
  };

  const hrStyle = {
    color: "white",
    width: "100%",
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered style={bRadius}>
      <Modal.Header closeButton style={ModalStyle}>
        <Modal.Title>{workoutType}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={ModalStyle}>
        <h4>Workout 1 here</h4>
        <hr style={hrStyle} />
        <h4>Workout 2 here</h4>
        <hr style={hrStyle} />
        <h4>Workout 3 here</h4>
        <hr style={hrStyle} />
        <h4>Workout 4 here</h4>
      </Modal.Body>
    </Modal>
  );
};

export default WorkoutModal;
