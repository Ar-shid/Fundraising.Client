import {
  getCampaignApproval,
  updateCampaignApproval,
} from "../../../../api/Campaign/Campaign";
import { useState, useEffect } from "react";
import Shimmer from "../../common/shimmer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CampaignApprove = () => {
  const [approval, setApproval] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchApproval = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await getCampaignApproval(token);
      setApproval(res.data);
    } catch (err) {
      console.error("Error fetching Approval:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApproval();
  }, []);

  const handleApproval = async (id, status) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await updateCampaignApproval(id, status, token);
      toast.success(status ? "Campaign Approved" : "Campaign Declined");
      fetchApproval(); // refresh list
    } catch (err) {
      console.error("Error updating approval:", err);
      toast.error("Failed to update approval");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
                    <span className="userDatatable-title">Organizers </span>
                  </th>
                  <th>
                    <span className="userDatatable-title">Funds</span>
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
                {approval.map((approval) => (
                  <tr key={approval.id}>
                    <td>
                      <div className="d-flex">
                        <div className="userDatatable-inline-title">
                          <h6>{approval.name}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        {approval.assignedToName || "No Value"}
                      </div>
                    </td>
                    <td>
                      <div className="order-bg-opacity-primary userDatatable-content">
                        ${approval.raisedAmount}
                      </div>
                    </td>
                    <td>
                      <div className="userDatatable-content">
                        {approval.compaignGroups?.length > 0
                          ? approval.compaignGroups
                              .map((g) => g.name)
                              .join(", ")
                          : "No Group"}
                      </div>
                    </td>
                    <td>
                      <div className="d-flex">
                        <button
                          className="btn"
                          onClick={() => handleApproval(approval.id, true)}
                        >
                          Accept
                        </button>{" "}
                        <button
                          className="btn"
                          onClick={() => handleApproval(approval.id, false)}
                        >
                          Decline
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
export default CampaignApprove;
