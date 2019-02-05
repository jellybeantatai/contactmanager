import React, { Component } from "react";
import axios from 'axios';

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
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
    ],
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

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.setState({
        contacts: res.data
      }))
  }

  // componentDidMount() {
  //   axios.get('https://www.jsonstore.io/6b9d923aba958ae04c16c229456437f1b62bbaef8a6504e59d31bcdebbc3de74')
  //     .then(res =>console.log(res))
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
