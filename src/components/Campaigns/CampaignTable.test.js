import React from "react";
import renderer from "react-test-renderer";
import { CampaignTable } from "./CampaignTable.jsx";
import { filterRecords } from "../../utils/campaign";

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
        filteredRecords={filterRecords([...records], "", "", "")}
        users={[]}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
