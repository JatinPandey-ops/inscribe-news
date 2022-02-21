import  Navbar  from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import React from 'react';
import Form from "react-bootstrap/Form";
import HamburgerIcon from "../hamburgericon/HamburgerIcon.js";
import "./navigationBar.css";

export default function NavigationBar(props) {

  const toggleMode = ()=>{
    if (props.Mode === "dark") {
       props.setMode('light')
       document.body.style.backgroundColor='white'
    }
    else{
      props.setMode('dark')
      document.body.style.backgroundColor='rgb(56 56 56)'
    }
  }
    return (
<Navbar bg={props.Mode} variant={props.Mode} expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">
      <div className="img-container">      
      <img
          alt="logo"
          src= {`${process.env.PUBLIC_URL }/brandName.png`}
          width="30"
          height="30"
          style={props.Mode === "light"?{filter:"invert(100%)"}:null}
          className="d-inline-block align-top"
        />{' '}</div>
</Navbar.Brand>
<Form.Check 
          className="darkmodeBtn"
          type="switch"
          id="custom-switch"
          
          onClick={toggleMode}
        />
      <HamburgerIcon  keyword={props.keyword} setKeyword={props.setKeyword} setCategory={props.setCategory} Mode ={props.Mode} setMode ={props.setMode}/>
  </Container>
</Navbar>
    )
}
