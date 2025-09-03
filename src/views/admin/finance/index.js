import AdminHeader from "../layout/AdminHeader";
import Sidebar from "../layout/Sidebar";
import { Link } from "react-router-dom";
import FinanceScoreCard from "./section/FinanceScoreCard";
import BarChart from "./section/BarChart";
import CircleChart from "./section/CircleChart";
import SalesTable from "./section/SalesTable";
const AdminFinance = () => {
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
                  <h4 className="text-capitalize breadcrumb-title">Finance</h4>
                </div>
              </div>
              <FinanceScoreCard />
              <div className="col-lg-9">
                <BarChart />
                <h4 class="text-capitalize breadcrumb-title my-4">
                  List of Sales
                </h4>
                <SalesTable />
              </div>
              <div className="col-lg-3">
                <CircleChart />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default AdminFinance;
