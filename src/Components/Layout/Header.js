import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-5 py-0">
      <div className="container">
        <a
          href="/"
          className="navbar-brand"
          style={{ fontWeight: "bold", fontSize: "30px" }}
        >
          {props.branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto" style={{ padding: "14px 16px" }}>
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: "White" }}>
                <i className="fas fa-home" />Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact/add"
                className="nav-link"
                style={{ color: "White" }}
              >
                <i className="fas fa-plus" />Add Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: "White" }}>
                <i className="fas fa-question" />About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
