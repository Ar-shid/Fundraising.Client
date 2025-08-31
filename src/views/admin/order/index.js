import AdminHeader from "../layout/AdminHeader";
import Sidebar from "../layout/Sidebar";
import OrderTable from "./section/OrderTable";
const AdminOrder = () => {
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
                  <h4 className="text-capitalize breadcrumb-title">Orders</h4>
                </div>
              </div>
              <OrderTable />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default AdminOrder;
