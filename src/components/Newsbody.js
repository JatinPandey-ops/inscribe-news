import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import LoadingNews from "./LoadingNews";
import Spinner from "react-bootstrap/Spinner";

export default function Newsbody(props) {
  // console.log(props.loadmore);
  if (props.data.length === 0) {
    return <LoadingNews />;
  }
  return (
    <>
      <div className="cotainer">
        <h2 className="my-3 text-center">{props.category}-Headlines</h2>
        <div className="row">
          {props.data.map((objdata) => {
            return (
              <Newsitem
                title={objdata.title}
                url={objdata.link}
                imgUrl={objdata.media}
                description={objdata.excerpt}
                key={objdata._id}
                src={objdata.clean_url}
              />
            );
          })}
          <div
            className="container"
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {props.loadmore && <Spinner animation="border" />}
          </div>
        </div>
      </div>
    </>
  );
}
