import { mapStateToProps } from "./SearchCampaignFilter";

describe("Search Campaign component", () => {
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
