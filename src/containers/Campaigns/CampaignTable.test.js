import { mapStateToProps } from "./CampaignTable";
describe("Campaign Table", () => {
  it("should map state correctly", () => {
    const state = {
      campaignReducer: {
        startDate: "",
        endDate: "",
        searchText: "",
        records: [
          {
            id: 1,
            name: "Divavu",
            startDate: "09/19/2019",
            endDate: "03/19/2020",
            Budget: 88377,
            userId: 3
          }
        ]
      },
      userReducer: {
        users: [],
        isLoading: true
      }
    };
    const props = {
      startDate: "",
      endDate: "",
      searchText: "",
      records: [
        {
          id: 1,
          name: "Divavu",
          startDate: "09/19/2019",
          endDate: "03/19/2020",
          Budget: 88377,
          userId: 3
        }
      ],
      filteredRecords: [
        {
          id: 1,
          name: "Divavu",
          startDate: "09/19/2019",
          endDate: "03/19/2020",
          Budget: 88377,
          userId: 3
        }
      ],
      users: [],
      isLoading: true
    };
    const componentState = mapStateToProps(state, props);
    expect(componentState).toEqual(props);
  });
});
