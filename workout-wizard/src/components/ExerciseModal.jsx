import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Modal, Button, ButtonGroup } from "react-bootstrap";
import CalCardSmall from "./CalCardSmall";
import "../css/ExerciseModal.css";

const ExerciseModal = ({ isOpen, onClose }) => {
  const [results, setResults] = useState([]);
  const [selectedMuscle, setSelectedMuscle] = useState("chest");
  const [level, setLevel] = useState("beginner");
  const [buildType, setBuildType] = useState(null);
  const [show, setShow] = useState(isOpen);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [buildReps, setBuildReps] = useState(null);
  const [buildSets, setBuildSets] = useState(null);
  const [exerciseDataInModal, setExerciseDataInModal] = useState([]);
  const [displayedWorkouts, setDisplayedWorkouts] = useState([]);

  const handleClose = () => {
    setShow(false);
    setSelectedMuscle("chest");
    setLevel("beginner");
    setBuildType(null);
    setSelectedExercises([]);
    setSelectedDay(null);
    setBuildReps(null);
    setBuildSets(null);
    onClose();
  };

  const muscleGroups = {
    Arms: ["biceps", "triceps", "forearms"],
    Legs: ["quadriceps", "hamstrings", "calves"],
    Chest: ["chest"],
    Back: ["lats", "lower_back", "middle_back", "traps"],
    Core: ["abdominals"],
  };

  const handleMuscleClick = (muscle) => {
    setSelectedMuscle(muscle);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedMuscle || !level) {
        console.warn("Please select muscle group and level.");
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

        // Log the fetched exercise details
        console.log("Fetched Exercise Details:", result);
      } catch (error) {
        console.error("Error: ", error.responseText);
      }
    };

    // Fetch data when show, selectedMuscle, or level changes
    if (show && selectedMuscle && level) {
      fetchData();
    }
  }, [show, selectedMuscle, level]);

  const handleBuildType = (type) => {
    setBuildType(type);

    if (type === "build") {
      // Shuffle the array to get random exercises for "Build" mode
      const shuffledExercises = [...results]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);
      setSelectedExercises(shuffledExercises);
    } else if (type === "customize") {
      setSelectedExercises([]);
    }
  };

  const handleCustomizeAdd = () => {
    if (
      selectedExercises.length < 1 ||
      buildReps === null ||
      buildSets === null ||
      selectedDay === null
    ) {
      console.warn("Please fill in all fields for Customize.");
      return;
    }

    const newMuscleGroups = () => {
      if (
        selectedMuscle === "biceps" ||
        selectedMuscle === "triceps" ||
        selectedMuscle === "forearms"
      ) {
        return "Arms";
      } else if (
        selectedMuscle === "quadriceps" ||
        selectedMuscle === "hamstrings" ||
        selectedMuscle === "calves"
      ) {
        return "Legs";
      } else if (selectedMuscle === "chest") {
        return "Chest";
      } else if (
        selectedMuscle === "lats" ||
        selectedMuscle === "lower_back" ||
        selectedMuscle === "middle_back" ||
        selectedMuscle === "traps"
      ) {
        return "Back";
      } else if (selectedMuscle === "abdominals") {
        return "Core";
      } else {
        return "Cardio";
      }

      // You might want to provide a default value or handle other cases here
      return newMuscleGroups;
    };

    // Save the selected exercises to local storage
    const exerciseData = {
      selectedMuscle: newMuscleGroups(), // Call the function to get the value
      exercises: selectedExercises,
      buildReps,
      buildSets,
      selectedDay,
    };

    console.log(exerciseData);

    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("exerciseData")) || [];

    // Save the new data to local storage
    localStorage.setItem(
      "exerciseData",
      JSON.stringify([...existingData, exerciseData])
    );

    // Update the state in ExerciseModal for immediate display in CalCardSmall
    setExerciseDataInModal((prevData) => [...prevData, exerciseData]);

    // Reset selections
    handleClose();
    window.location.reload();
  };

  /**************************************************************/
  const handleBuildAdd = () => {
    if (
      selectedExercises.length !== 4 ||
      buildReps === null ||
      buildSets === null ||
      selectedDay === null
    ) {
      console.warn("Please fill in all fields for Build.");
      return;
    }

    const newMuscleGroups = () => {
      if (
        selectedMuscle === "biceps" ||
        selectedMuscle === "triceps" ||
        selectedMuscle === "forearms"
      ) {
        return "Arms";
      } else if (
        selectedMuscle === "quadriceps" ||
        selectedMuscle === "hamstrings" ||
        selectedMuscle === "calves"
      ) {
        return "Legs";
      } else if (selectedMuscle === "chest") {
        return "Chest";
      } else if (
        selectedMuscle === "lats" ||
        selectedMuscle === "lower_back" ||
        selectedMuscle === "middle_back" ||
        selectedMuscle === "traps"
      ) {
        return "Back";
      } else if (selectedMuscle === "abdominals") {
        return "Core";
      } else {
        return "Cardio";
      }

      // You might want to provide a default value or handle other cases here
      return newMuscleGroups;
    };

    // Save the selected exercises to local storage
    const exerciseData = {
      selectedMuscle: newMuscleGroups(), // Call the function to get the value
      exercises: selectedExercises,
      buildReps,
      buildSets,
      selectedDay,
    };

    // Arms: ["biceps", "triceps", "forearms"],
    // Legs: ["quadriceps", "hamstrings", "calves"],
    // Chest: ["chest"],
    // Back: ["lats", "lower_back", "middle_back", "traps"],
    // Core: ["abdominals"],
    // Cardio: ["cardio"],

    console.log(exerciseData);

    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem("exerciseData")) || [];

    // Save the new data to local storage
    localStorage.setItem(
      "exerciseData",
      JSON.stringify([...existingData, exerciseData])
    );

    // Update the state in ExerciseModal for immediate display in CalCardSmall
    setExerciseDataInModal((prevData) => [...prevData, exerciseData]);

    // Call function here to display exerciseDataInModal taking the selectedMuscle and passing it via the CalCardSmall text prop

    displayWorkout();

    // Reset selections
    handleClose();
    console.log(exerciseData);
    window.location.reload();
  };

  const handleCheckboxChange = (exercise) => {
    if (selectedExercises.includes(exercise)) {
      setSelectedExercises((prev) =>
        prev.filter((selected) => selected !== exercise)
      );
    } else {
      setSelectedExercises((prev) => [...prev, exercise]);
    }
  };

  ///////////////////
  function renderCalCardSmallComponents(workouts) {
    return workouts.map((workout, index) => (
      <CalCardSmall
        key={index}
        text={workout.muscle}
        color={"lightgray"} // Replace with logic to map the selected muscle to its color
      />
    ));
  }
  ///////////////////

  ///////////////
  const displayWorkout = () => {
    //
    // Extract the muscle information from exerciseDataInModal and set to state
    const workoutsToDisplay = exerciseDataInModal.map((exerciseData) => ({
      muscle: exerciseData.selectedMuscle,
      selectedDay: exerciseData.selectedDay,
    }));
    setDisplayedWorkouts(workoutsToDisplay);
  };
  /////////////////////////////////////////////////////////////

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-bg">
          <Modal.Title>Add Exercise</Modal.Title>
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
                onClick={() => handleMuscleClick(muscleGroups[category][0])}
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>

          <div>
            <label className="font-color">Day of the Week: </label>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="select-style"
            >
              <option value="--">--</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>

          <div>
            <label className="font-color">Mastery</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="select-style"
            >
              <option value="" disabled hidden>
                Mastery
              </option>
              <option value="beginner">Apprentice</option>
              <option value="intermediate">Grand Master</option>
              {/* <option value="expert">Expert</option> */}
            </select>
          </div>

          <div>
            <div>
              <label className="font-color">Build Type: </label>
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

          {buildType && (
            <div>
              <div>
                <h3>Select Exercises:</h3>
                {buildType === "customize"
                  ? results.map((result) => (
                      <div key={result.id}>
                        <input
                          type="checkbox"
                          id={result.id}
                          checked={selectedExercises.includes(result)}
                          onChange={() => handleCheckboxChange(result)}
                        />
                        <label htmlFor={result.id}>{result.name}</label>
                      </div>
                    ))
                  : selectedExercises.map((result) => (
                      <div key={result.id}>
                        <input
                          type="checkbox"
                          id={result.id}
                          checked={selectedExercises.includes(result)}
                          onChange={() => handleCheckboxChange(result)}
                        />
                        <label htmlFor={result.id}>{result.name}</label>
                      </div>
                    ))}
              </div>

              <div>
                <label>Reps: </label>
                <input
                  type="number"
                  value={buildType === "customize" ? buildReps : buildReps}
                  onChange={(e) =>
                    buildType === "customize"
                      ? setBuildReps(e.target.value)
                      : setBuildReps(e.target.value)
                  }
                />
              </div>

              <div>
                <label>Sets: </label>
                <input
                  type="number"
                  value={buildType === "customize" ? buildSets : buildSets}
                  onChange={(e) =>
                    buildType === "customize"
                      ? setBuildSets(e.target.value)
                      : setBuildSets(e.target.value)
                  }
                />
              </div>

              <Button
                variant="primary"
                onClick={() =>
                  buildType === "customize"
                    ? handleCustomizeAdd()
                    : handleBuildAdd()
                }
              >
                Add Exercises
              </Button>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="modal-bg">
          <Button
            variant="secondary"
            onClick={handleClose}
            className="close-bg"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {renderCalCardSmallComponents(displayedWorkouts)}
    </div>
  );
};

export default ExerciseModal;
