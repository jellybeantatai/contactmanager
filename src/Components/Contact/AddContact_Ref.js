// ###############################  THIS FILE IS NOT BEING USED PRESENTLY. ONLY FOR DEMO PURPOSE ################################

import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    console.log(contact);
  };

  static defaultProps = {
    name: "John Doe",
    email: "john@yahoo.com",
    phone: "9999999999"
  };

  render() {
    const { name, email, phone } = this.props;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                placeholder="Enter Name..."
                defaultValue={name}
                ref={this.nameInput}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="email"
                placeholder="Enter your email..."
                defaultValue={email}
                ref={this.emailInput}
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="phone"
                placeholder="Enter your phone number...."
                defaultValue={phone}
                ref={this.phoneInput}
              />
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-light btn-block"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
