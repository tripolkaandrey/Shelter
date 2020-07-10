import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Ads from "./Pages/Ads";
import Help from "./Pages/Help";

import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ads" component={Ads} />
        <Route exact path="/help" component={Help} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
