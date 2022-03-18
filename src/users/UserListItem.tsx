import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const UserListItem: FC<{ u: any }> = ({ u }) => (
  <ListItem>
    <ListItemButton component={Link} to={`/users/${u.id}`}>
      <ListItemText primary={u.name} secondary={u.mail} />
    </ListItemButton>
  </ListItem>
);
