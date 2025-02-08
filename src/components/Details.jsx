import React from "react";

function Details(props) {
  return (
    <div className="details-container">
      <div className="details">
        <div>
          <h6>IP ADDRESS</h6>
          <h3>{props.info.ip}</h3>
        </div>
        <div className="vl"></div>
        <div>
          <h6>LOCATION</h6>
          <h3>{props.info.region}</h3>
        </div>
        <div className="vl"></div>
        <div>
          <h6>TIMEZONE</h6>
          <h3>{props.info.timezone}</h3>
        </div>
        <div className="vl"></div>
        <div>
          <h6>ISP</h6>
          <h3>{props.info.org}</h3>
        </div>
      </div>
    </div>
  );
}

export default Details;
