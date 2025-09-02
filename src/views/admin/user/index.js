import AdminHeader from "../layout/AdminHeader";
import Sidebar from "../layout/Sidebar";
import { Link } from "react-router-dom";
import UserScoreCard from "./section/UserScoreCard";
import UserTable from "./section/UserTable";
const AdminUser = () => {
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
                  <h4 className="text-capitalize breadcrumb-title">Users</h4>
                  <Link to="" className="PrimaryBtn">
                    Add User
                    <svg
                      className="ms-3"
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8251 6.09995C10.8251 6.59995 10.4251 6.99995 9.9251 6.99995H6.3251V10.4C6.3251 10.9 5.9251 11.3 5.4251 11.3C4.9251 11.3 4.5251 10.9 4.5251 10.4V6.99995H1.1251C0.625098 6.99995 0.225098 6.59995 0.225098 6.09995C0.225098 5.59995 0.625098 5.19995 1.1251 5.19995H4.5251V1.59995C4.5251 1.09995 4.9251 0.699951 5.4251 0.699951C5.9251 0.699951 6.3251 1.09995 6.3251 1.59995V5.19995H9.9251C10.4251 5.19995 10.8251 5.59995 10.8251 6.09995Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* <UserScoreCard /> */}
            <UserTable />
          </div>
        </div>
      </main>
    </>
  );
};
export default AdminUser;
