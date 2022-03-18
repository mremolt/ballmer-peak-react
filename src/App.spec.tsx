/* eslint-disable testing-library/no-container, testing-library/no-node-access */
import { render, within } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

it('renders the App title', () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const header = container.querySelector('header') as HTMLHeadElement;
  const titleElement = within(header).getByText('Ballmer Peak');

  expect(titleElement).toBeInTheDocument();
});
