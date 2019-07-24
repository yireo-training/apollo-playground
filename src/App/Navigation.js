import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Categories from "./Navigation/Categories";

const Navigation = () => {
  return (
    <div className="Navigation">
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/checkout">Checkout</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/cart">
            Cart <Badge variant="primary">0</Badge>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">ApolloPlayground</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Categories />
          </Nav>
          <Form inline>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
