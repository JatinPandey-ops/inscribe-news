import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import navOption from "../../NavOptions.js/NavOption";
import "./hamburgericon.css";

function HamburgerIcon(props) {
  const category = props.setCategory;


  const handleChange = (e) => {
    props.setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.keyword);
    props.setCategory(props.keyword);
  };


  return (
    <>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        className={`bg-${props.Mode} text-${props.Mode=== 'light'?'dark' : 'light'}`}
      >
        <Offcanvas.Header closeButton Variant={`${props.Mode=== 'light'?'dark' : 'light'}`}>
          <Offcanvas.Title id="offcanvasNavbarLabel">Select</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3 ">
            {navOption.map((listitem, i) => (
              <Nav.Link
                className={`list-item text-${props.Mode=== 'light'?'dark' : 'light'}`} 
                href="#action1"
                key={i}
                listItem={listitem}   
                onClick={() => {
                  category(listitem);
                }}
              >
                {listitem}
              </Nav.Link>
            ))}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              value={props.keyword}
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-danger" onClick={handleSubmit}>
              Search
            </Button>
          </Form>
        </Offcanvas.Body>
        <div className="devName">
          <div className= {`name text-${props.Mode=== 'light'?'dark' : 'light'}`}>
            <span>D</span>eveloped by-:
            <b>
              <span>J</span>atin <span>P</span>andey
            </b>
          </div>
          <hr />
          <p>All rights reserved</p>
        </div>
      </Navbar.Offcanvas>
    </>
  );
}

export default HamburgerIcon;
