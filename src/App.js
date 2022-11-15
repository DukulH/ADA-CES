import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import LoginRoot from "./components/login/index";
import Page1 from "./components/pages/page1";
import Page2 from "./components/pages/page2";
import Page3 from "./components/pages/page3";
import PrivateRoute from "./components/route";

function App() {
  return (
    <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard}>
          </PrivateRoute>
          <PrivateRoute path="/dashboard" component={Dashboard}>
          </PrivateRoute>
          <PrivateRoute path="/page1" component={Page1}>
          </PrivateRoute>
          <PrivateRoute path="/page2" component={Page2}>
          </PrivateRoute>
          <PrivateRoute path="/page3" component={Page3}>
          </PrivateRoute>
          <PrivateRoute path="/login" component={LoginRoot}>
          </PrivateRoute>
        </Switch>
    </Router>
  );
}


export default App;
