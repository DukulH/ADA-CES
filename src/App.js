import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
           
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
