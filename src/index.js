import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { SharedContextProvider } from "./context/SharedContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SharedContextProvider>
        <App />
      </SharedContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
