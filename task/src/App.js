import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//pages
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";

//component
import MainNavigation from "./component/Navigation/MainNavigation";

function App() {
  let routes;
  routes = (
    <Switch>
      <Route exact path="/" component={Task1} />
      <Route exact path="/task2" component={Task2} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <Router>
      <MainNavigation />
      <main className="main-content">{routes}</main>
    </Router>
  );
}

export default App;
