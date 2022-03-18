import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { User } from './user.interface';

export const UserDetail = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  let params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [params]);

  return (
    <div>
      <h1>User detail</h1>

      <pre>{JSON.stringify(user, undefined, 2)}</pre>

      <br />
      <Link to="/">back</Link>
    </div>
  );
};
