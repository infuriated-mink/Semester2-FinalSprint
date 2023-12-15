// MainPage.js
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

  return (
    <div>
      <h1>Main Page</h1>

      <ProfileDropdown />
      <Button variant="primary" onClick={openModal}>
        Add Exercise
      </Button>

      <ExerciseModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default MainPage;
