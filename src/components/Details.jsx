import React from "react";

function Details(props) {
  return (
    <div className="details-container">
      <div className="details">
        <div>
          <h6>IP ADDRESS</h6>
          <h3>{props.info != null ? props.info.ip : 'Getting info...'}</h3>
        </div>
        <div className="vl"></div>
        <div>
          <h6>LOCATION</h6>
          <h3>{props.info != null ? props.info.region : "Getting info..."}</h3>
        </div>
        <div className="vl"></div>
        <div>
          <h6>TIMEZONE</h6>
          <h3>{props.info != null ? props.info.timezone : "Getting info..."}</h3>
        </div>
        <div className="vl"></div>
        <div>
          <h6>ISP</h6>
          <h3>{props.info != null ? props.info.org : "Getting info..."}</h3>
        </div>
      </div>
    </div>
  );
}

export default Details;
