import React from "react";
import { NavLink } from "react-router-dom";

const activeClass = {
  color: "red",
  fontWeight: "bold"
};

const Navbar = props => (
  <ul
    style={{
      listStyle: "none",
      display: "flex"
    }}
  >
    <li style={{ marginRight: "0.5rem" }}>
      <NavLink activeStyle={activeClass} to="/" exact>
        Home
      </NavLink>
    </li>
    <li style={{ marginRight: "0.5rem" }}>
      <NavLink activeStyle={activeClass} to="/signup">
        Signup
      </NavLink>
    </li>
    <li style={{ marginRight: "0.5rem" }}>
      <NavLink activeStyle={activeClass} to="/signin">
        Signin
      </NavLink>
    </li>
  </ul>
);

export default Navbar;
