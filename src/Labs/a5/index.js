import React from "react";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/Labs/a5`;
    return (
      <div>
        <h1>Assignment 5 - working?</h1>
        <div className="list-group">
          <a href={`${URL}/welcome`}
             className="list-group-item">
            Welcome
          </a>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
        </div>
        
      </div>
    );
  }
  export default Assignment5;