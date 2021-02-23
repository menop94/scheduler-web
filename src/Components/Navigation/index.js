import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Strings } from "../../Constants/Strings";

import "./styles.scss";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar className="topNavigation" color="light" light expand="md">
      <NavbarBrand href="/">ProgServ</NavbarBrand>
      <NavbarToggler onClick={toggleMenu} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem active={window.location.pathname === "/"}>
            <Link to="/" as={NavLink}>
              <NavLink>{Strings.HOME}</NavLink>
            </Link>
          </NavItem>
          <NavItem active={window.location.pathname === "/calendar"}>
            <Link to="/calendar">
              <NavLink>{Strings.CALENDAR}</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;
