import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { render } from "@testing-library/react";
import App from "./App.jsx";
import reducers from "./reducers";

test("renders the app", () => {
  const store = createStore(reducers, applyMiddleware(thunk, logger));
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
