import { connect } from "react-redux";
import { CampaignTable } from "../../components/Campaigns/CampaignTable.jsx";
import withLoader from "../../components/WithLoader";
import { filterRecords } from "../../utils/campaign";
// const filteredRecords = filterRecords([...records], props);

export const mapStateToProps = ({
  campaignReducer: { startDate, endDate, searchText, records },
  userReducer: { users, isLoading }
}) => ({
  startDate,
  endDate,
  searchText,
  records,
  filteredRecords: filterRecords([...records], startDate, endDate, searchText),
  users,
  isLoading
});
export default connect(mapStateToProps)(withLoader(CampaignTable));
