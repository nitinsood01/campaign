import { mapStateToProps } from "../../containers/SearchCampaignFilter";

describe("Search Campaign component", () => {
  describe("Search Campaign container", () => {
    describe("mapStateToProps", () => {
      it("should map state correctly", () => {
        const state = {
          campaignReducer: {
            searchText: ""
          }
        };
        const props = {
          searchText: ""
        };
        const componentState = mapStateToProps(state, props);
        expect(componentState).toEqual(props);
      });
    });
  });
});
