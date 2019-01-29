import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
