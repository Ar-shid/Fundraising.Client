import { Link } from "react-router-dom";
import { getAllGroups, getGroupById } from "../../../../api/Group/Group";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Modal from "react-bootstrap/Modal";
import React from "react";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const OGroupCard = () => {
  const [group, setGroups] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await getAllGroups(token);

        console.log("Get Group", res);

        setGroups(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false); // stop shimmer
      }
    };
    fetchGroups();
  }, []);

  const handleViewGroup = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await getGroupById(id, token);
      setSelectedGroup(res.data);
      setModalShow(true);
    } catch (err) {
      console.error("Error fetching group details:", err);
    }
  };

  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        group={selectedGroup}
      />

      {loading
        ? Array(8) // 👈 show 4 shimmer cards
            .fill()
            .map((_, idx) => (
              <div
                className="cus-xl-3 col-lg-3 col-md-11 col-12 mb-30 px-10"
                key={idx}
              >
                <div className="card campaign-card product product--grid">
                  <div className="h-100">
                    <Skeleton height={200} /> {/* image skeleton */}
                    <div className="card-body px-20 pb-25 pt-20">
                      <Skeleton width={`80%`} height={20} />
                      <Skeleton width={`60%`} height={20} />
                      <Skeleton width={`40%`} height={20} />
                      <div className="d-flex mt-20">
                        <Skeleton width={100} height={35} className="mr-2" />
                        <Skeleton width={50} height={35} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
        : group.map((group) => (
            <div
              className="cus-xl-3 col-lg-3 col-md-11 col-12 mb-30 px-10"
              key={group.id}
            >
              <div className="card campaign-card group-card product product--grid">
                <div className="h-100">
                  <div className="product-item">
                    <div className="product-item__image">
                      <Link to="">
                        <img
                          className="card-img-top img-fluid"
                          // src="./img/group.png"
                          src={
                            group.logoPath
                              ? `${BASE_URL}${group.logoPath}` // ✅ base URL + relative path
                              : "./img/group.png"
                          }
                          // alt={group.name}
                        />
                      </Link>
                    </div>
                    <div className="card-body px-20 pb-25 pt-20">
                      <div className="product-item__body text-capitalize">
                        <Link to="">
                          <h6 className="card-title">{group.name}</h6>
                          <h6 className="card-desc">
                            {group.description || "No description"}
                          </h6>
                        </Link>
                        <div className="product-item__button d-flex mt-20 flex-wrap">
                          <button
                            onClick={() => handleViewGroup(group.id)}
                            className="btn btn-update"
                          >
                            View Group
                          </button>
                        </div>
                        <div className="d-flex product-desc-price align-items-center mb-10 flex-wrap">
                          <div>
                            <span>Total Members </span>
                            <h4>100</h4>
                          </div>

                          <div>
                            <span>Goals</span>
                            <h4>$150,234</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};
export default OGroupCard;
function MyVerticallyCenteredModal({ group, ...props }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="custom-modal"
    >
      <Modal.Header>
        <span onClick={props.onHide}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1811 11.5748C13.6311 12.0248 13.6311 12.7248 13.1811 13.1748C12.9561 13.3998 12.6812 13.4998 12.3812 13.4998C12.0812 13.4998 11.8062 13.3998 11.5812 13.1748L7.00615 8.59981L2.43114 13.1748C2.20614 13.3998 1.93115 13.4998 1.63115 13.4998C1.33115 13.4998 1.05616 13.3998 0.831165 13.1748C0.381165 12.7248 0.381165 12.0248 0.831165 11.5748L5.40615 6.9998L0.831165 2.42481C0.381165 1.97481 0.381165 1.2748 0.831165 0.824802C1.28116 0.374802 1.98114 0.374802 2.43114 0.824802L7.00615 5.3998L11.5812 0.824802C12.0312 0.374802 12.7311 0.374802 13.1811 0.824802C13.6311 1.2748 13.6311 1.97481 13.1811 2.42481L8.60613 6.9998L13.1811 11.5748Z"
              fill="black"
            />
          </svg>
          Close Window
        </span>
      </Modal.Header>
      <Modal.Body>
        {group ? (
          <div className="content">
            <img
              src={
                group.logoPath
                  ? `${BASE_URL}${group.logoPath}`
                  : "./img/group.png"
              }
              alt={group.name}
            />
            <h4>{group.name}</h4>
            <p>{group.description || "No description available."}</p>
            <p>
              <strong>Created By:</strong> {group.createdByName}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {group.isApproved ? "Approved" : "Pending"}
            </p>

            <Link to="" className="PrimaryBtn" data-discover="true">
              Invite Participants
            </Link>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Modal.Body>
    </Modal>
  );
}
