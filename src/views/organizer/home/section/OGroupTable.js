// import { getOrganizers } from "../../../../api/Auth/Auth";
import { getAllGroupsByOrganizer } from "../../../../api/Group/Group";
import { useState, useEffect } from "react";
import Shimmer from "../../../admin/common/shimmer";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const OGroupTable = () => {
  const [group, setGroup] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      const sub = localStorage.getItem("sub");

      if (!token) return;
      try {
        const res = await getAllGroupsByOrganizer(sub, token);

        console.log("Get Groups", res);

        setGroup(res.data);
      } catch (err) {
        console.error("Error fetching Users:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-lg-9">
          <div className="userDatatable global-shadow border p-30 bg-white radius-xl w-100 mb-30">
            <div className="table-responsive">
              {loading ? (
                <Shimmer /> // Show shimmer while loading
              ) : (
                <table className="table mb-0 table-borderless">
                  <thead>
                    <tr className="userDatatable-header">
                      <th></th>
                      <th>
                        <span className="userDatatable-title">Group Name</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">
                          Participates{" "}
                        </span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Status</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.map((group) => (
                      <tr key={group.id}>
                        <td>
                          <div className="userDatatable-content">
                            <img
                              style={{
                                width: "34px",
                                height: "34px",
                                objectFit: "cover",
                                borderRadius: "5px",
                              }}
                              src={
                                group.logoPath
                                  ? `${BASE_URL}${group.logoPath}` // ✅ base URL + relative path
                                  : "./img/group.png"
                              }
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="userDatatable-inline-title">
                              <h6>{group.name}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="userDatatable-inline-title">
                              <h6>1200</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          {group.status === 1 && (
                            <div
                              style={{ backgroundColor: "#F8D7DA" }}
                              className="order-bg-opacity-primary userDatatable-content"
                            >
                              Denied
                            </div>
                          )}
                          {group.status === 2 && (
                            <div
                              style={{ backgroundColor: "#E5F1CC" }}
                              className="order-bg-opacity-primary userDatatable-content"
                            >
                              Working
                            </div>
                          )}
                          {group.status === 3 && (
                            <div
                              style={{ backgroundColor: "#CCE5FF" }}
                              className="order-bg-opacity-primary userDatatable-content"
                            >
                              Active
                            </div>
                          )}
                          {group.status === 4 && (
                            <div
                              style={{ backgroundColor: "#FFF3CD" }}
                              className="order-bg-opacity-primary userDatatable-content"
                            >
                              InActive
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OGroupTable;
