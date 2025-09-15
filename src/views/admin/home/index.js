import AdminHeader from "../layout/AdminHeader";
import Sidebar from "../layout/Sidebar";
import ScoreCard from "./section/ScoreCard";
import CampaignCard from "../campaign/section/CampaignCard";
import AdminOrganizerList from "./section/AdminOrganizerList";
const AdminHome = () => {
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
                    Dashboard
                  </h4>
                </div>
              </div>
              <ScoreCard />
              <div className="col-lg-12">
                <div className="breadcrumb-main">
                  <h4 className="text-capitalize breadcrumb-title">
                    Your Campaigns
                  </h4>
                </div>
              </div>
              <CampaignCard limit={3} />
              <div className="col-lg-3">
                <AdminOrganizerList />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default AdminHome;
