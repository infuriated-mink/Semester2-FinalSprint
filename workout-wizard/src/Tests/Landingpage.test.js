import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';

test('renders Login and Signup buttons', () => {
  const { getByText } = render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  );

  const loginButton = getByText(/Login/i);
  const signupButton = getByText(/Signup/i);

  expect(loginButton).toBeInTheDocument();
  expect(signupButton).toBeInTheDocument();
});

