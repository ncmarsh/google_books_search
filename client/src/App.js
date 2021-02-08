import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

function App() {
  document.title = "Google Book Search";
  return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
        <Switch>
          <Route>

          </Route>
          <Route>
            
          </Route>
          <Route>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
