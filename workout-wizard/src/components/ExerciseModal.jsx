import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Modal, Button, ButtonGroup } from "react-bootstrap";

const ExerciseModal = () => {
  const [results, setResults] = useState([]);
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [level, setLevel] = useState("beginner");
  const [buildType, setBuildType] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const muscleGroups = {
    Arms: ["biceps", "triceps", "forearms"],
    Legs: ["quadriceps", "hamstrings", "calves"],
    Chest: ["chest"],
    Back: ["lats", "lower_back", "middle_back", "traps"],
    Core: ["abdominals"],
    Cardio: ["cardio"],
  };

  const handleMuscleClick = (muscle) => {
    setSelectedMuscle(muscle);
  };

  const handleBuildType = (type) => {
    setBuildType(type);
  };

  const fetchData = async () => {
    if (!selectedMuscle || !buildType) {
      console.warn("Please select muscle group and build type.");
      return;
    }

    try {
      const result = await $.ajax({
        method: "GET",
        url: `https://api.api-ninjas.com/v1/exercises?muscle=${selectedMuscle}&difficulty=${level}`,
        headers: {
          "X-Api-Key": "lcs+RYwfm+OWdQramu84vg==CX9KbOYJ7AH5YH7R",
        },
        contentType: "application/json",
      });
      setResults(result);
    } catch (error) {
      console.error("Error: ", error.responseText);
    }
  };

  useEffect(() => {
    if (show && buildType) {
      fetchData();
    }
  }, [show, selectedMuscle, level, buildType]);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Exercise
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Exercise Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ButtonGroup>
            {Object.keys(muscleGroups).map((category) => (
              <Button
                key={category}
                variant={
                  selectedMuscle &&
                  muscleGroups[category].includes(selectedMuscle)
                    ? "primary"
                    : "secondary"
                }
                onClick={() =>
                  handleMuscleClick(muscleGroups[category][0])
                }
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>

          <div>
            <label>Level: </label>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>

          <div>
            <div>
              <label>Build Type: </label>
            </div>
            <ButtonGroup>
              <Button
                variant={buildType === "build" ? "primary" : "secondary"}
                onClick={() => handleBuildType("build")}
              >
                Build
              </Button>
              <Button
                variant={buildType === "customize" ? "primary" : "secondary"}
                onClick={() => handleBuildType("customize")}
              >
                Customize
              </Button>
            </ButtonGroup>
          </div>

          <div>
            <h2>Results:</h2>
            <pre>{JSON.stringify(results, null, 2)}</pre>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExerciseModal;
