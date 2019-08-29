import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <NavLink
          exact
          activeClassName="active"
          className="elementary"
          to="/centennial-elementary"
        >
          Centennial
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="elementary"
          to="/harriet-rowley-elementary"
        >
          Harriet Rowley
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="elementary"
          to="/jefferson-elementary"
        >
          Jefferson
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="elementary"
          to="/little-mountain-elementary"
        >
          Little Mountain
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="elementary"
          to="/lincoln-elementary"
        >
          Lincoln
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="elementary"
          to="/madison-elementary"
        >
          Madison
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="elementary"
          to="/washington-elementary"
        >
          Washington
        </NavLink>

        <NavLink
          exact
          activeClassName="active"
          className="middle"
          to="/laventure-middle"
        >
          Laventure
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="middle"
          to="/mount-baker-middle"
        >
          Mount Baker
        </NavLink>

        <NavLink
          exact
          activeClassName="active"
          className="high"
          to="/mount-vernon-high"
        >
          Mount Vernon High School
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
