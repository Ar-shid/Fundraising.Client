import AdminHeader from "../../layout/AdminHeader";
import Sidebar from "../../layout/Sidebar";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
  return (
    <>
      <AdminHeader />
      <main className="main-content">
        <Sidebar />
        <div className="contents">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card card-Vertical card-default campaign-form card-md mb-4">
                  <div className="card-header">
                    <h5>Basic Information</h5>
                  </div>
                  <div className="card-body p-5">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <div className="Vertical-form">
                          <form action="#">
                            <div className="form-group">
                              <label
                                htmlFor="formGroupExampleInput"
                                className="color-dark fs-14 fw-500 align-center"
                              >
                                First Name*
                              </label>
                              <input
                                type="text"
                                className="form-control ih-medium ip-gray radius-xs b-light px-15"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor="formGroupExampleInput"
                                className="color-dark fs-14 fw-500 align-center"
                              >
                                Last Name*
                              </label>
                              <input
                                type="text"
                                className="form-control ih-medium ip-gray radius-xs b-light px-15"
                              />
                            </div>
                            <div className="layout-button mt-5 text-end">
                              <button
                                type="button"
                                className="btn primary-btn btn-default btn-squared px-30"
                              >
                                Update Profile
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Profile;
