import React from "react";
import {Route, Link} from 'react-router-dom';
import './App.css';
import Homepage from './Homepage.js';
import Pizza from './Pizza.js';


const App = () => {
  return (
    <div>
      <Route exact path={'/'}>
        <Homepage/>
      </Route>

      <Route exact path={'/pizza'} id="order-pizza">
        <Pizza/>
      </Route>
    </div>
  );
};
export default App;
