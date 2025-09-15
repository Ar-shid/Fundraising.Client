import AdminHeader from "../../admin/layout/AdminHeader";
import Sidebar from "../../admin/layout/Sidebar";
import SGroupCard from "./section/SGroupCard";
const SalesGroup = () => {
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
                    Top Groups
                  </h4>
                </div>
              </div>
              <SGroupCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default SalesGroup;
