import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './home/Home';
import { Users } from './users/Users';
import { UserDetail } from './users/UserDetail';

const NavButton = styled(Button)`
  color: white;
` as typeof Button;

const Content = styled.div`
  padding: 10px;
`;

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Ballmer Peak
          </Typography>

          <Box>
            <NavButton component={Link} to="/">
              Home
            </NavButton>

            <NavButton component={Link} to="/users">
              Users
            </NavButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Content>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;
