import React from 'react';
import Login from './components/Login/Login';
import Global from './Global/global';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (
    <div>
      <Global></Global>
      

      <Switch>
        <Route exact path="/Login" >
          <Login></Login>
        </Route>
        <Route exact path="/" >
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
