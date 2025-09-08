import AdminHeader from "../../admin/layout/AdminHeader";
import Sidebar from "../../admin/layout/Sidebar";
import OrganizerHomeScoreCard from "./section/OrganizerHomeScoreCard";
import OGroupTable from "./section/OGroupTable";
const OrganizerHome = () => {
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
              <OrganizerHomeScoreCard />
              <div className="col-lg-9">
                <div className="breadcrumb-main">
                  <h4 className="text-capitalize breadcrumb-title">
                    Your Groups
                  </h4>
                </div>
              </div>
              <OGroupTable />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default OrganizerHome;
