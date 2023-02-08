import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import reportWebVitals from "./reportWebVitals";
import '@tremor/react/dist/esm/tremor.css'
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = process.env.REACT_APP_URL_BACK;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
