import logo from "./icons/cygnus.png";
import "./App.css";
import React from "react";
import Feed from "./feed/Feed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="solarsystem.ico" className="App-logo" alt="logo" />
        <h1>AstroBlog</h1>
        <p>
          Daily photo feed from NASA's{" "}
          <a
            href="https://apod.nasa.gov/apod/"
            title="NASA's Astronomy Picture of the Day"
            style={{ color: "#2e2f30" }}
          >
            Astronomy Picture of the Day!
          </a>
          <br />
          Checkout the most recent posts below, or search for specific date and keyword:
        </p>
      </header>
      <div>
        <Feed />
      </div>
      <footer className="App-footer">
        <div>
          <a href="." style={{ color: "white" }}>
            Refresh Page
          </a>
        </div>
        <i>
          <div>
            Webpage made by {" "}
            <a
              href="https://github.com/shijiew555"
              title="Personal Website"
              style={{ color: "white" }}
            >
              Shijie Wang
            </a>{" "}
             found{" "}
            <a
              href="https://github.com/shijiew555/AstroBlog"
              title="GitHub Link"
              style={{ color: "white" }}
            >
              Here
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a
              href="https://www.freepik.com"
              title="Freepik"
              style={{ color: "white" }}
            >
              Freepik
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              style={{ color: "white" }}
            >
              www.flaticon.com
            </a>
          </div>
        </i>
      </footer>
    </div>
  );
}

export default App;
