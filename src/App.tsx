import React from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Global from './Global/global';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Global></Global>
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
