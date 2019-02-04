import React from "react";
import PropTypes from "prop-types";

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
              <a href="/" className="nav-link" style={{ color: "White" }}>
                Home
              </a>
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
