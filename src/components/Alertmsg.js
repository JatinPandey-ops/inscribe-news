import React, { useState } from 'react'
import  Alert  from "react-bootstrap/Alert"

export default function Alertmsg(props) {  
  if (props.newsResult === 0) {
      return <Alert className="alert-box " variant="dark">
      <b> No articles found!</b>
      </Alert> 
  }else{
    return null
  }

  }
