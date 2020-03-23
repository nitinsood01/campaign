import renderer from "react-test-renderer";
import React from "react";
import { mapStateToProps } from "../../containers/CampaignTable";
import { CampaignTable } from "../../components/CampaignTable.jsx";
describe("Campaign Table", () => {
  describe("Campaign Table container", () => {
    describe("mapStateToProps", () => {
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
          users: [],
          isLoading: true
        };
        const componentState = mapStateToProps(state, props);
        expect(componentState).toEqual(props);
      });
    });
  });
  describe("Campaign Table display component", () => {
    it("should not regress", () => {
      const records = [
        {
          id: 1,
          name: "Divavu",
          startDate: "09/19/2019",
          endDate: "03/19/2020",
          Budget: 88377,
          userId: 3
        }
      ];
      const tree = renderer.create(
        <CampaignTable
          startDate=""
          endDate=""
          searchText=""
          records={records}
          users={[]}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
