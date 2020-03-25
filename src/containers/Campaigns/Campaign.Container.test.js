import { mapDispatchToProps } from "./Campaign";

describe("Campaign container", () => {
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
