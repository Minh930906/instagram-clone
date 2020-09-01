import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <Post
        username="Miki"
        caption="Rip BlackPanther"
        imageUrl="https://pbs.twimg.com/media/Egjby7kWoAA1PRI?format=jpg&name=900x900"
      />
      <Post />
      <Post />
    </div>
  );
}

export default App;
