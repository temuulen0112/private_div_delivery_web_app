import React from "react";
import ReactDOM from "react-dom";
import "./css/TextField.css";
import "./css/index.css";
import "./css/footer.css";
import "./css/Area.css"
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/modal.css'
import { UserProvider } from "./context/userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
