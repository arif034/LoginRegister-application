import "./styles.css";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  onLoginClickHandler = (event) => {};

  render() {
    return <div className="App"></div>;
  }
}
export default App;
