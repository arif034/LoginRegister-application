import "./styles.css";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
