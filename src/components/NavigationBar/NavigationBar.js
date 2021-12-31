import  Navbar  from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import React from 'react';
import HamburgerIcon from "../hamburgericon/HamburgerIcon.js";
import "./navigationBar.css";

export default function NavigationBar(props) {
    return (
<Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">
      <div className="img-container">      <img
          alt="logo"
          src= {`${process.env.PUBLIC_URL }/brandName.png`}
          width="30"
          height="30"
          style={{filter:"invert(100%)"}}
          className="d-inline-block align-top"
        />{' '}</div>
</Navbar.Brand>
      <HamburgerIcon  keyword={props.keyword} setKeyword={props.setKeyword} setCategory={props.setCategory}/>
  </Container>
</Navbar>
    )
}
