import React, { Component } from "react";

const context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "8989828282"
      },
      {
        id: 2,
        name: "Albert Einstein",
        email: "eeqmc2@gmail.com",
        phone: "8989828282"
      },
      {
        id: 3,
        name: "Thomas Alva Edison",
        email: "lightbulbs@gmail.com",
        phone: "8989828282"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
