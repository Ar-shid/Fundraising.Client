// import { getOrganizers } from "../../../../api/Auth/Auth";
import { getOrganizers } from "../../../../api/Auth/Auth";
import { useState, useEffect } from "react";
import Shimmer from "../../../admin/common/shimmer";

const OrganizerUserTable = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await getOrganizers(token);

        console.log("Get Users", res);

        setUsers(res.data);
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
        <div className="col-12">
          <div className="userDatatable global-shadow border p-30 bg-white radius-xl w-100 mb-30">
            <div className="table-responsive">
              {loading ? (
                <Shimmer /> // Show shimmer while loading
              ) : (
                <table className="table mb-0 table-borderless">
                  <thead>
                    <tr className="userDatatable-header">
                      <th>Name</th>
                      <th>
                        <span className="userDatatable-title">emaill</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Role</span>
                      </th>
                      <th>
                        <span className="userDatatable-title">Group</span>
                      </th>
                      <th>
                        <span className="userDatatable-title float-right">
                          action
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((user) => (
                      <tr key={user.id}>
                        <td>
                          <div className="d-flex">
                            <div className="userDatatable-inline-title">
                              <h6>{user.name}</h6>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="userDatatable-content">
                            john-keller@gmail.com
                          </div>
                        </td>
                        <td>
                          <div className="order-bg-opacity-primary userDatatable-content">
                            Organizer
                          </div>
                        </td>
                        <td>
                          <div className="userDatatable-content">
                            XYZ School
                          </div>
                        </td>
                        <td>
                          <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-edit"
                              >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                              </svg>
                            </li>
                          </ul>
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
export default OrganizerUserTable;
