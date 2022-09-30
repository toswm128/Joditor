import React from "react";
import ReactDOM from "react-dom";
// import Joditor from "./lib/Joditor";
import Joditor from "joditor";
ReactDOM.render(
  <React.StrictMode>
    <Joditor onSubmit={(dom) => console.log(dom)} onCancle={() => {}} />
  </React.StrictMode>,
  document.getElementById("root")
);
