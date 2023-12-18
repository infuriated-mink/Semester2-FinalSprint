import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';

const ExerciseModal = ({ isOpen, onClose, onAddExercise }) => {
  const [results, setResults] = useState([]);
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [level, setLevel] = useState('beginner');
  const [buildType, setBuildType] = useState(null);
  const [show, setShow] = useState(isOpen);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [reps, setReps] = useState(null);
  const [sets, setSets] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [buildReps, setBuildReps] = useState(null);
  const [buildSets, setBuildSets] = useState(null);

  const handleClose = () => {
    setShow(false);
    setSelectedMuscle(null);
    setLevel('beginner');
    setBuildType(null);
    setSelectedExercises([]);
    setReps(null);
    setSets(null);
    setSelectedDay(null);
    setBuildReps(null);
    setBuildSets(null);
    onClose();
  };

  const handleShow = () => {
    setShow(true);
    setSelectedMuscle(null);
    setLevel('beginner');
    setBuildType(null);
    setSelectedExercises([]);
    setReps(null);
    setSets(null);
    setSelectedDay(null);
    setBuildReps(null);
    setBuildSets(null);
  };

  const muscleGroups = {
    Arms: ['biceps', 'triceps', 'forearms'],
    Legs: ['quadriceps', 'hamstrings', 'calves'],
    Chest: ['chest'],
    Back: ['lats', 'lower_back', 'middle_back', 'traps'],
    Core: ['abdominals'],
    Cardio: ['cardio'],
  };

  const handleMuscleClick = (muscle) => {
    setSelectedMuscle(muscle);
  };

  const handleBuildType = (type) => {
    setBuildType(type);

    if (type === 'build') {
      // Randomly select four exercises for "Build" mode
      const randomExercises = results.sort(() => Math.random() - 0.5).slice(0, 4);
      setSelectedExercises(randomExercises);
    }
  };

  const handleCustomizeAdd = () => {
    if (selectedExercises.length < 1 || reps === null || sets === null || selectedDay === null) {
      console.warn('Please fill in all fields for Customize.');
      return;
    }

    // Log selected exercises with reps, sets, and selected day
    console.log('Selected Exercises (Customize):', selectedExercises);
    console.log('Reps (Customize):', reps);
    console.log('Sets (Customize):', sets);
    console.log('Selected Day:', selectedDay);

    // Add exercises to main page
    onAddExercise(selectedExercises, reps, sets, selectedDay);

    // Reset selections
    handleClose();
  };

  const handleBuildAdd = () => {
    if (selectedExercises.length !== 4 || buildReps === null || buildSets === null || selectedDay === null) {
      console.warn('Please fill in all fields for Build.');
      return;
    }

    // Log selected exercises for Build
    console.log('Selected Exercises (Build):', selectedExercises);
    console.log('Reps (Build):', buildReps);
    console.log('Sets (Build):', buildSets);
    console.log('Selected Day:', selectedDay);

    // Add exercises to main page
    onAddExercise(selectedExercises, buildReps, buildSets, selectedDay);

    // Reset selections
    handleClose();
  };

  const fetchData = async () => {
    if (!selectedMuscle || !buildType) {
      console.warn('Please select muscle group and build type.');
      return;
    }

    try {
      const result = await $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/exercises?muscle=${selectedMuscle}&difficulty=${level}`,
        headers: {
          'X-Api-Key': 'lcs+RYwfm+OWdQramu84vg==CX9KbOYJ7AH5YH7R',
        },
        contentType: 'application/json',
      });
      setResults(result);

      if (buildType === 'customize') {
        // Log exercise details fetched from the API in "Customize" mode
        console.log('Fetched Exercise Details:', result);
      }
    } catch (error) {
      console.error('Error: ', error.responseText);
    }
  };

  useEffect(() => {
    if (show && buildType) {
      fetchData();
    }
  }, [show, selectedMuscle, level, buildType]);

  const handleCheckboxChange = (exercise) => {
    if (selectedExercises.includes(exercise)) {
      setSelectedExercises((prev) => prev.filter((selected) => selected !== exercise));
    } else {
      setSelectedExercises((prev) => [...prev, exercise]);
    }
  };

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
                    ? 'primary'
                    : 'secondary'
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
            <label>Day of the Week: </label>
            <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
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
                variant={buildType === 'build' ? 'primary' : 'secondary'}
                onClick={() => handleBuildType('build')}
              >
                Build
              </Button>
              <Button
                variant={buildType === 'customize' ? 'primary' : 'secondary'}
                onClick={() => handleBuildType('customize')}
              >
                Customize
              </Button>
            </ButtonGroup>
          </div>

          {buildType && (
            <div>
              <div>
                <h3>Select Exercises:</h3>
                {results.map((result) => (
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
                  value={buildType === 'customize' ? reps : buildReps}
                  onChange={(e) => (buildType === 'customize' ? setReps(e.target.value) : setBuildReps(e.target.value))}
                />
              </div>

              <div>
                <label>Sets: </label>
                <input
                  type="number"
                  value={buildType === 'customize' ? sets : buildSets}
                  onChange={(e) => (buildType === 'customize' ? setSets(e.target.value) : setBuildSets(e.target.value))}
                />
              </div>

              <Button variant="primary" onClick={() => (buildType === 'customize' ? handleCustomizeAdd() : handleBuildAdd())}>
                Add Exercises
              </Button>
            </div>
          )}
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
