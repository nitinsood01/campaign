import { mapStateToProps } from "./DateRangeFilter";

describe("Campaign Table  component", () => {
  it("should map state correctly", () => {
    const state = {
      campaignReducer: {
        startType: "text",
        endType: "text",
        startDate: "",
        endDate: ""
      }
    };
    const props = {
      startType: "text",
      endType: "text",
      startDate: "",
      endDate: ""
    };
    const componentState = mapStateToProps(state, props);
    expect(componentState).toEqual(props);
  });
});
