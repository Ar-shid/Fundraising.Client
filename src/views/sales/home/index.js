import AdminHeader from "../../admin/layout/AdminHeader";
import Sidebar from "../../admin/layout/Sidebar";
import SalesScoreCard from "./section/SalesScoreCard";
import SCampaignCard from "../campaign/section/SCampaignCard";
import BarChart from "../../admin/finance/section/BarChart";
const SalesHome = () => {
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
              <SalesScoreCard />
              <div className="col-lg-12">
                <div className="breadcrumb-main">
                  <h4 className="text-capitalize breadcrumb-title">
                    Active Campaigns
                  </h4>
                </div>
              </div>
              <SCampaignCard limit={3} />
              <div className="col-lg-9">
                <BarChart />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default SalesHome;
