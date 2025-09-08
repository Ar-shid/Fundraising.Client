// import { getOrganizers } from "../../../../api/Auth/Auth";
import { getAllGroups } from "../../../../api/Group/Group";
import { useState, useEffect } from "react";
import Shimmer from "../../../admin/common/shimmer";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const OGroupTable = () => {
  const [group, setGroup] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await getAllGroups(token);

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
                          <div className="userDatatable-content">1200</div>
                        </td>
                        <td>
                          {group.isApproved ? (
                            <div className="order-bg-opacity-primary userDatatable-content">
                              Active
                            </div>
                          ) : (
                            <div
                              style={{ backgroundColor: "#E5F1CC" }}
                              className="order-bg-opacity-primary userDatatable-content"
                            >
                              Waiting
                            </div>
                          )}
                          {/* <div className="order-bg-opacity-primary userDatatable-content">
                            {group.isApproved}
                          </div> */}
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
