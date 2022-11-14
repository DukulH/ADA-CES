import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginRoot from "./components/login/index";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <LoginRoot />
          </Route>
          <Route path="/users">
            
          </Route>
          <Route path="/">
          
          </Route>
        </Switch>
    </Router>
  );
}


export default App;
