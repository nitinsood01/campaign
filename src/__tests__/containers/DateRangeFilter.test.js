import { mapStateToProps } from "../../containers/DateRangeFilter";

describe("Campaign Table  component", () => {
  describe("Campaign Table container", () => {
    describe("mapStateToProps", () => {
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
  });
});
