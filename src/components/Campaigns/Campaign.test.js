import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "../../reducers";
import renderer from "react-test-renderer";
import { Campaign } from "./Campaign.jsx";

describe("Campaign Table display component", () => {
  it("should not regress", () => {
    const store = createStore(reducers, applyMiddleware(thunk, logger));
    const tree = renderer.create(
      <Provider store={store}>
        <Campaign />
      </Provider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
