import React from "react";

export default function Newsitem(props) {
  return (
    <div className ={`container col-md-4 my-3 `}>
      <div className={`card bg-${props.Mode}`}style={{minHeight:"33rem"}}>
        <img src={props.imgUrl === null?process.env.PUBLIC_URL + '/img/no-img.jpeg' : props.imgUrl } className="card-img-top" alt="loading..." style={{height:"15rem"}} />
        <div className={`card-body text-${props.Mode === "light"?"dark":"light"}`}>
          <h5 className="card-title"><b>{props.title}</b></h5>
          <p className="card-text">{props.description}</p>
          <a href={props.url} target = "_blank" className={`btn btn-outline-${props.Mode === "light"?"dark":"light"}`}style = {{position:"absolute",bottom:"10px"}}>
            Read More at <b>{props.src}</b>
          </a>
        </div>
      </div>
    </div>
  );
}
