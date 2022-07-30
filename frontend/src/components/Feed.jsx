import React from "react";
import "./css/Feed.css";
import Post from "./Post";
import QueriousBox from "./QueriousBox";

function Feed() {
  return (
    <div className="feed">
      <QueriousBox />
      <Post />
    </div>
  );
}

export default Feed;
