import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";


import MainPage from "./components/MainPage";
import Publications from "./components/Publications";
import Contacts from "./components/Contacts";
import Gallery from "./components/Gallery";

import './hw-20.css'

function HW20() {
  const match = useRouteMatch();

  return (
    <div className="wrapper-20">
      <div className="nav-container-20">
        <Link to={`${match.url}`}>Home</Link>
        <Link to={`${match.url}/publication`}>Publication</Link>
        <Link to={`${match.url}/gallery`}>Gallery</Link>
        <Link to={`${match.url}/contacts`}>Contacts</Link>
      </div>

      <Switch>
        <Route exact path={`${match.url}/publication`}>
          <Publications />
        </Route>
        <Route exact path={`${match.url}/gallery`}>
          <Gallery />
        </Route>
        <Route exact path={`${match.url}/contacts`}>
          <Contacts />
        </Route>
        <Route exact path={`${match.url}`}>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default HW20;
