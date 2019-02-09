import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       contacts : [...data]
  //     }))
  // }

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({
      contacts: res.data
    });
  }

  // componentDidMount() {
  //   axios
  //     .get(
  //       "https://www.jsonstore.io/1599588efc61e91c3996f5c90106516463a3c24fb49796dd5ab4fd7a457172d6"
  //     )
  //     .then(res => {
  //       if (res.data.result == null) return;
  //       else
  //         this.setState({
  //           contacts: res.data.result.contacts
  //         });
  //     });
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
