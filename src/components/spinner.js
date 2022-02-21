import React from 'react'
import Spinner from "react-bootstrap/Spinner";

export default function spinner() {
    return (
       <>
         <Spinner animation="grow" variant="secondary" size="sm"/>
  <Spinner animation="grow" variant="success"  size="sm"/>
  <Spinner animation="grow" variant="danger"  size="sm"/>
  <Spinner animation="grow" variant="warning"  size="sm"/>
  <Spinner animation="grow" variant="info"  size="sm"/>
  <Spinner animation="grow" variant="light"  size="sm"/>
  <Spinner animation="grow" variant="dark"  size="sm"/>
       </>
    )
}
