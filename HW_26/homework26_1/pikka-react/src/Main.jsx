import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import CreatePikka from './pages/CreatePikka'

const Main = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/signin" component={Signin} />
    <Route path="/create" component={CreatePikka} />
  </Switch>
);

export default Main;
