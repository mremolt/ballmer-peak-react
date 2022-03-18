import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { UserListItem } from './UserListItem';

describe('UserListItem', () => {
  const u = { name: 'The name', email: 'The email' };

  it('should render name', () => {
    render(
      <MemoryRouter>
        <UserListItem u={u} />
      </MemoryRouter>
    );

    expect(screen.getByText('The name')).toBeInTheDocument();
  });

  it('should render email', () => {
    render(
      <MemoryRouter>
        <UserListItem u={u} />
      </MemoryRouter>
    );

    expect(screen.getByText('The email')).toBeInTheDocument();
  });
});
