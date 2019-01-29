import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState(prevState => {
      return {
        showContactInfo: !prevState.showContactInfo
      };
    });
  };

  // onDeleteClick = () => {
  //   this.props.deleteClickHandler();
  // };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          {"  "}{" "}
          <i
            className="fas fa-sort-down"
            onClick={this.onShowClick}
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-user-times"
            style={{ cursor: "pointer", float: "right", color: "#f94a04" }}
            // onClick={this.onDeleteClick.bind(this)}
            onClick={() => {
              this.props.deleteClickHandler();
            }}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
