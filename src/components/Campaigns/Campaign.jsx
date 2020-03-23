import React, { useEffect } from "react";
import CampaignsTable from "../../containers/Campaigns/CampaignTable";
import DateRangeFilter from "../../containers/Filters/DateRangeFilter";
import SearchCampaignFilter from "../../containers/Filters/SearchCampaignFilter";

export const Campaign = props => {
  useEffect(() => {
    const { addCampaigns, getUsers } = props;
    window.AddCampaigns = records => {
      addCampaigns(records);
    };
    getUsers();
  }, [props]);
  return (
    <div>
      <div className="position-center flex-dir-row mr-5">
        <DateRangeFilter />
        <SearchCampaignFilter />
      </div>
      <div className="position-center">
        <CampaignsTable />
      </div>
    </div>
  );
};
