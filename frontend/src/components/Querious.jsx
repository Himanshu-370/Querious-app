import React from "react";
import Feed from "./Feed";
import QueriousHeader from "./QueriousHeader";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import "./css/Querious.css";

function Querious() {
  return (
    <div>
      <QueriousHeader />
      <div className="querious__contents">
        <div className="querious__content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default Querious;
