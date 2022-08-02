import { Avatar } from "@material-ui/core";
import React from "react";
import "./css/QueriousBox.css";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";

function QueriousBox() {
  const user = useSelector(selectUser);

  return (
    <div className="queriousBox">
      <div className="queriousBox__info">
        <Avatar src={user?.photo} />
      </div>
      <div className="queriousBox__querious">
        <h4>What is your question or link?</h4>
      </div>
    </div>
  );
}

export default QueriousBox;
