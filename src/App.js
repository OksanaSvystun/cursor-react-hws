// import React, { useState } from "react";
import {Switch, Route, NavLink } from "react-router-dom";

import "./App.css";
import HW17 from "./hw-17/hw-17";
import HW18 from "./hw-18/hw-18";
import HW19 from "./hw-19/hw-19";

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <h1>My react homeworks</h1>
      </header>
      <nav>
        <div className="link-container">
          <NavLink to="/17-react-intro" className="btn btn-danger">
            17
          </NavLink>
          <NavLink to="/18-react-hooks" className="btn btn-danger">
            18
          </NavLink>
          <NavLink to="/19-react-router" className="btn btn-danger">
            19
          </NavLink>
        </div>
      </nav>

      <Switch>
        <Route path="/17-react-intro">
          <HW17 />
        </Route>
        <Route path="/18-react-hooks">
          <HW18 />
        </Route>
        <Route path="/19-react-router">
          <HW19 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
