import renderer from "react-test-renderer";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { mapDispatchToProps } from "../../containers/Campaign";
import reducers from "../../reducers";
import Campaign from "../../containers/Campaign";

describe("Campaign", () => {
  describe("mapDispatchToProps", () => {
    it("should map dispatch correctly", () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).addCampaigns();
      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: "ADD_CAMPAIGNS",
          data: []
        }
      ]);
    });
  });
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
});
