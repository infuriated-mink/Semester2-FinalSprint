import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ExerciseModal from '../components/ExerciseModal';
import ProfileDropdown from '../components/profiledropdown';

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddExercise = (selectedExercises, reps, sets) => {
    // Implement the logic to add exercises to the main page
    console.log("Adding exercises to main page:", selectedExercises, reps, sets);
    // Add your logic here
  };

  return (
    <div>
      <h1>Main Page</h1>

      <ProfileDropdown />
      <Button variant="primary" onClick={openModal}>
        Add Exercise
      </Button>

      <ExerciseModal isOpen={isModalOpen} onClose={closeModal} onAddExercise={handleAddExercise} />
    </div>
  );
}

export default MainPage;