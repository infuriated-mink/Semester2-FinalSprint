import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ExerciseModal = ({ isOpen, onClose }) => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const apiKey = ''; 

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('https://api-ninjas.com/api/exercises', {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setExercises(data);
        setFilteredExercises(data); // Initialize with all exercises
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, [apiKey]);

  const filterExercisesByMuscleGroup = (muscleGroup) => {
    if (muscleGroup === 'all') {
      setFilteredExercises(exercises);
    } else {
      const filtered = exercises.filter(exercise => exercise.category === muscleGroup);
      setFilteredExercises(filtered);
    }
    setSelectedMuscleGroup(muscleGroup);
    console.log('Selected Muscle Group:', muscleGroup);
  };

  const handleDifficultySelect = async (difficulty) => {
    setSelectedDifficulty(difficulty);
    console.log('Selected Difficulty:', difficulty);

    try {
      const response = await fetch('https://api-ninjas.com/api/exercises', {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Results:', data); // Log the results from the API

      // Filter exercises based on both muscle group and selected difficulty
      const filtered = data.filter(exercise => exercise.category === selectedMuscleGroup && exercise.difficulty === difficulty);
      setFilteredExercises(filtered);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  const renderMuscleGroupButtons = () => {
    const muscleGroups = ['legs', 'core', 'back', 'chest', 'arms', 'cardio'];

    return muscleGroups.map(group => (
      <Button
        key={group}
        onClick={() => filterExercisesByMuscleGroup(group)}
        variant={selectedMuscleGroup === group ? 'success' : 'primary'}
      >
        {group.charAt(0).toUpperCase() + group.slice(1)}
      </Button>
    ));
  };

  const renderDifficultyDropdown = () => {
    const difficulties = ['beginner', 'intermediate', 'expert'];

    return (
      <div>
        <label>Choose Difficulty:</label>
        <select value={selectedDifficulty} onChange={(e) => handleDifficultySelect(e.target.value)}>
          {difficulties.map(difficulty => (
            <option key={difficulty} value={difficulty}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Exercise Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          {renderMuscleGroupButtons()}
        </div>
        {renderDifficultyDropdown()}
        <ul>
          {filteredExercises.map(exercise => (
            <li key={exercise.id}>{exercise.name}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExerciseModal;
