import "./styles.css";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsxToRender: (
        <div className="App">
          <button onClick={() => this.onLoginHandler()}>Login</button>
          <br />
          <br />
          <button onClick={() => this.onRegisterHandler()}>Register</button>
        </div>
      )
    };
  }

  onLoginHandler = () => {
    const jsx = (
      <div className="App">
        First Name :
        <input type="text" name="firstName" placeholder="First Name" />
        <br />
        <br />
        Last Name :
        <input type="text" name="LastName" placeholder="Last Name" />
        <br />
        <br />
        Email Id : <input type="text" name="EmailId" placeholder="Email Id" />
        <br />
        <br />
        Password : <input type="text" name="Password" placeholder="Password" />
        <br />
        <br />
        Confirm Password :
        <input
          type="text"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
      </div>
    );
    this.setState({ jsxToRender: jsx });
  };
  onRegisterHandler = () => {
    const jsx = (
      <div className="App">
        <input type="text" name="emailId" placeholder="Email Id" />
        <br />
        <br />
        <input type="text" name="password" placeholder="Password" />
      </div>
    );
    this.setState({ jsxToRender: jsx });
  };

  render() {
    const jsx = this.state.jsxToRender;
    return { jsx };
  }
}
export default App;
