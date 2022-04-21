import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { CanvasProvider } from "../src/pages/newManage/DrawDisplay/CanvasContext";
import 'antd/dist/antd.css'
ReactDOM.render(
  <React.StrictMode>
    <CanvasProvider>
      <App />
    </CanvasProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
