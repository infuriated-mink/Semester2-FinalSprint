import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ExerciseModal from '../components/ExerciseModal';

describe('ExerciseModal', () => {
  test('renders without crashing', () => {
    const { queryByText } = render(<ExerciseModal isOpen={false} />);
    expect(queryByText('Exercise Modal')).toBeNull();
  });

  test('renders when isOpen is true', async () => {
    const { getByText } = render(<ExerciseModal isOpen={true} />);
    await waitFor(() => {
      expect(getByText('Exercise Modal')).toBeInTheDocument();
    });
  });  
});