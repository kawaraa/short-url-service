import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import AppProvider, { AppContext } from "./src/store/app-state";
import "./app.css";

function App() {
  useEffect(() => {}, []);

  return "";
}

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
