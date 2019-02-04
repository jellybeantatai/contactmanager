import React, { Component } from "react";
import "./App.css";
import Contacts from "./Components/Contact/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./Context";
import AddContact from "./Components/Contact/AddContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Layout/Header";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
