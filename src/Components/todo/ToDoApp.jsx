import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class ToDoApp extends Component {
  render() {
    return (
      <div className="ToDoApp">
          <Router>
              <>
              <Switch>
              <Route path = "/" exact component={LoginComponent} />
              <Route path = "/login" component={LoginComponent} />
              <Route path = "/welcome" component={WelcomeComponent} />
              <Route component={ErrorComponent} />
              </Switch>
              </>
        </Router>
      </div>
    );
  }
}

class WelcomeComponent extends Component{
    render(){
        return <div>WELCOME HELLO</div>
    }
}

function ErrorComponent(){
    return <div>An error occurred. </div>
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Dummy user",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked(){
      //hardcoded login
      if(this.state.username === 'test' && this.state.password === 'test'){
       this.props.history.push("/welcome");

    }
  }

  render() {
    return (
      <div>
          {this.state.hasLoginFailed &&  <div>Invalid Credentials</div>}
          {this.state.showSuccessMessage &&   <div>Login Success</div>}

        Username :{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

export default ToDoApp;
