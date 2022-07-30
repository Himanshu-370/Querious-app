import { Avatar } from "@material-ui/core";
import React from "react";
import "./css/QueriousBox.css";

function QueriousBox() {
  return (
    <div className="queriousBox">
      <div className="queriousBox__info">
        <Avatar />
      </div>
      <div className="queriousBox__querious">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  );
}

export default QueriousBox;
