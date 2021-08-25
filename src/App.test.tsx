import React from 'react';
import { render, screen, act, cleanup, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, RouteProps, MemoryRouter } from 'react-router-dom';
import { Router } from 'react-router'
import App from './App';

afterEach(cleanup)

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('it should have a dashboard button', () => {
  render(<App />);
  const dashboardButton = screen.getByRole('link', { name: 'dashboard' });

  expect(dashboardButton).toBeInTheDocument();
})

test('it should redirect to /dashboard when clicked on dashboard button', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  act(() => {
    const button = screen.getByRole('link', { name: 'dashboard' })
    userEvent.click(button)
  })
  expect(screen.getByText('...loading page')).toBeInTheDocument()
})
