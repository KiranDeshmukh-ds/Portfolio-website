import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import IceBreaker from "./components/IceBreaker";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row custom__app">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 app__main box">
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <IceBreaker />
                </Route>
                <Route path="/Projects">
                  <Projects />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
