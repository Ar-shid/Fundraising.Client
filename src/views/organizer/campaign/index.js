import AdminHeader from "../../admin/layout/AdminHeader";
import Sidebar from "../../admin/layout/Sidebar";
import OCampaignCard from "./section/OCampaignCard";
import { Link } from "react-router-dom";
const OrganizerCampaign = () => {
  return (
    <>
      <AdminHeader />
      <main className="main-content">
        <Sidebar />
        <div className="contents">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-main">
                  <h4 className="text-capitalize breadcrumb-title">
                    Active Campaigns
                  </h4>
                </div>
              </div>
              <OCampaignCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default OrganizerCampaign;
