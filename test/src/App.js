import React from "react";
import Joditor from "joditor";

function App() {
  return (
    <div className="App">
      <Joditor onSubmit={(dom) => console.log(dom)} />
    </div>
  );
}

export default App;
