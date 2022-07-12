import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./style.css";
import styled from "styled-components";

const Styles = styled.div`
  .navbar-brand,
  .navbar-nav .nav-item .nav-link {
    color: #5dd6a;
    &:hover {
      color: #f2f2f2;
    }
  }
`;

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Styles>
      <Navbar light expand="md" className="sticky-top">
        <NavbarBrand className="ml-3">Dexter Vorbe</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#/">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Styles>
  );
};

export default Navigation;
