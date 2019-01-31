import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../Context";

class Contacts extends Component {
  state = {};

  // deleteContact = id => {
  //   this.setState({
  //     contacts: this.state.contacts.filter(contact => contact.id !== id)
  //   });
  // };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
