import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Form from "../pages/Form";
import Adoption from "../pages/Adoption";

export default function NavbarComp() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container>
            <Navbar.Brand>Match Your Pet</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "300px", pending: "50px" }}
              >
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  Sobre
                </Nav.Link>
                <Nav.Link as={Link} to="/form">
                  Formulário
                </Nav.Link>
                <Nav.Link as={Link} to="/adoption">
                  Adoção
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/adoption">
            <Adoption />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
