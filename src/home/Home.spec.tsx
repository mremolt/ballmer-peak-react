import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('Home', () => {
  it('should render the Home Page', () => {
    render(<Home />);

    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
  });
});
