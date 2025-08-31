import AdminHeader from "../layout/AdminHeader";
import Sidebar from "../layout/Sidebar";
import SignInMethod from "./section/SignInMethod";

const AdminSetting = () => {
  return (
    <>
      <AdminHeader />
      <main className="main-content">
        <Sidebar />
        <div className="contents">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <SignInMethod />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default AdminSetting;
