import { getOrganizers } from "../../../../api/Auth/Auth";
import { useState, useEffect } from "react";
import Shimmer from "../../common/shimmer";
const AdminOrganizerList = () => {
  const [organizer, setOrganizer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrganizer = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await getOrganizers(token);

        console.log("Get Organizer Bilal", res);

        setOrganizer(res.data);
      } catch (err) {
        console.error("Error fetching Organizer:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrganizer();
  }, []);
  return (
    <>
      <div className="card organizer-list-card">
        <h1>Organizers</h1>

        {loading ? (
          <Shimmer /> // Show shimmer while loading
        ) : (
          <>
            {organizer.map((organizer) => (
              <div className="info">
                <div>
                  <img src="./img/icon/user.png" />
                </div>
                <div>
                  <h4>{organizer.name}</h4>
                  <p>$154,484</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
export default AdminOrganizerList;
