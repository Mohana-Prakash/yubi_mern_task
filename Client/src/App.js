import React from "react";
import "./App.css";
import Routers from "./routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Routers />
    </React.Fragment>
  );
}

export default App;
