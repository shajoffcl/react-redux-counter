import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./component/Store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
