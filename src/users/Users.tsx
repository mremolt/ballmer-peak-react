import { List, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { UserListItem } from './UserListItem';

export const Users = () => {
  const [data, setData] = useState<Array<any>>([]);

  useEffect(() => {
    if (data.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
  });

  return (
    <>
      <Typography variant="h3">List of Users</Typography>

      <List>
        {data.map((d) => (
          <UserListItem u={d} />
        ))}
      </List>
    </>
  );
};
