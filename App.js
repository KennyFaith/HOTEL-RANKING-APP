import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import HotelsPage from './pages/HotelsPage';
import CategoriesPage from './pages/CategoriesPage';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const App = () => {
  return (
    <Router>
      <div>
        <AppBar position="static" sx={{ backgroundColor: "black" }} >
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Hotel Management
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/hotel">Star Hotel Categories</Button>
            <Button color="inherit" component={Link} to="/categories">Hotel Category</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hotel" component={HotelsPage} />
            <Route path="/categories" component={CategoriesPage} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;
