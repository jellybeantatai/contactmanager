import React, { Component } from "react";
import "./App.css";
import Contacts from "./Components/Contacts";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./Context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
