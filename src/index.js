import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ImageWithText from "@anasrezamindtree/imagewithtext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const dt = {
  heading: "description",
  description: "heading",
};

{
  /* dynamic not working fine */
}
// const temp = "imagewithtext";
// const Component = require(`@anasrezamindtree/${temp}`);

root.render(
  <React.StrictMode>
    {/* direct import is working fine */}
    <ImageWithText {...dt} />

    {/* dynamic not working fine */}
    {/* <Component {...dt} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
