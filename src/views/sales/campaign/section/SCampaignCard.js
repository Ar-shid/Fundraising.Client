import { Link, useNavigate } from "react-router-dom";
import {
  getAllCampaigns,
  getCampaignById,
} from "../../../../api/Campaign/Campaign";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { Carousel } from "react-bootstrap";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const SCampaignCard = ({ limit }) => {
  const [campaign, setCampaign] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const navigate = useNavigate();
  const getDaysLeft = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0; // if expired, show 0
  };
  useEffect(() => {
    const fetchGroups = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await getAllCampaigns(token);

        console.log("Get Campaign", res);
        const sortedData = res.data.sort((a, b) => b.id - a.id);
        setCampaign(sortedData);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false); // stop shimmer
      }
    };
    fetchGroups();
  }, []);

  const handleViewCampaign = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    setModalShow(true); // show modal immediately 👈
    setModalLoading(true); // show loader inside modal 👈
    setSelectedCampaign(null);
    try {
      const res = await getCampaignById(id, token);
      console.log("Campaign By Id", res);
      setSelectedCampaign(res.data);
      setModalShow(true);
    } catch (err) {
      console.error("Error fetching group details:", err);
    } finally {
      setModalLoading(false);
    }
  };
  const handleEditNavigate = (id) => {
    navigate(`/admin-campaign/edit/${id}`);
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        campaign={selectedCampaign}
        loading={modalLoading}
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
        : campaign.slice(0, limit || campaign.length).map((campaign) => (
            <div
              className="cus-xl-3 col-lg-3 col-md-11 col-12 mb-30 px-10"
              key={campaign.id}
            >
              <div className="card campaign-card product product--grid">
                <div className="h-100">
                  <div className="product-item">
                    <div className="product-item__image">
                      <span className="days-left">
                        {getDaysLeft(campaign.endDate) === 0
                          ? "Expired"
                          : `${getDaysLeft(campaign.endDate)} days left`}
                      </span>
                      <span className="percent">
                        <span>80%</span>
                      </span>
                      <span className="featured">FEATURED</span>

                      <Link to="">
                        <img
                          className="card-img-top img-fluid"
                          src={
                            campaign.imagePaths &&
                            campaign.imagePaths.length > 0
                              ? `${BASE_URL}${campaign.imagePaths[0]}`
                              : "./img/campaign.png"
                          }
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="card-body px-20 pb-25 pt-20">
                      <div className="product-item__body text-capitalize">
                        <Link to="">
                          <h6 className="card-title">{campaign.name}</h6>
                        </Link>
                        <div className="product-item__button d-flex mt-20 flex-wrap">
                          <button
                            className="btn btn-update"
                            onClick={() => handleViewCampaign(campaign.id)}
                          >
                            View Campaign
                          </button>
                          <button
                            to=""
                            className="btn btn-edit"
                            onClick={() => handleEditNavigate(campaign.id)}
                          >
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.46637 14.1635L0.0442261 14.1193L0 9.69713L9.71609 0L14.1382 4.47269L4.46637 14.1635ZM1.3077 12.8684L3.96099 12.9L12.3883 4.47269L9.71609 1.78781L1.26979 10.2152L1.3077 12.8684Z"
                                fill="#00627C"
                              />
                              <path
                                d="M8.83521 1.7814L7.9418 2.6748L11.5154 6.24844L12.4088 5.35503L8.83521 1.7814Z"
                                fill="#00627C"
                              />
                              <path
                                d="M9.77698 3.49929L2.42422 10.8521L3.31763 11.7455L10.6704 4.3927L9.77698 3.49929Z"
                                fill="#00627C"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="d-flex product-desc-price align-items-center mb-10 flex-wrap">
                          <div>
                            <span>Raised</span>
                            <h4>{campaign.raisedAmount}</h4>
                          </div>
                          <div>
                            <span>Goals</span>
                            <h4>{campaign.requiredAmount}</h4>
                          </div>
                          <div>
                            <span>Left</span>
                            <h4>{campaign.requiredAmount}</h4>
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
export default SCampaignCard;
function MyVerticallyCenteredModal({ campaign, loading, ...props }) {
  const getDaysLeft = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0; // if expired, show 0
  };
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
        {loading ? ( // 👈 show loader while fetching
          <div className="text-center p-5">
            <div className="spinner-border text-primary" role="status" />
            <p className="mt-3">Loading campaign details...</p>
          </div>
        ) : campaign ? (
          <div className="content">
            {/* <img
              className="card-img-top img-fluid"
              src={
                campaign.imagePaths && campaign.imagePaths.length > 0
                  ? `${BASE_URL}${campaign.imagePaths[0]}`
                  : "./img/campaign.png"
              }
              alt={campaign.name}
            /> */}
            {campaign.imagePaths && campaign.imagePaths.length > 0 ? (
              <Carousel interval={3000} indicators={true}>
                {campaign.imagePaths.map((path, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 card-img-top img-fluid"
                      src={`${BASE_URL}${path}`}
                      alt={`campaign-image-${index}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <img
                className="card-img-top img-fluid"
                src="./img/campaign.png"
                alt="default campaign"
              />
            )}

            <h4>{campaign.name}</h4>

            <div className="d-flex view-price align-items-center mb-3 flex-wrap">
              <div>
                <span>Raiserd </span>
                <h4>{campaign.raisedAmount}</h4>
              </div>
              <div>
                <span>Goals</span>
                <h4>{campaign.requiredAmount}</h4>
              </div>
              <div>
                <span>Left</span>
                <h4>$150,234</h4>
              </div>
              <div>
                <span>Days Left</span>
                <h4>
                  {getDaysLeft(campaign.endDate) === 0
                    ? "Expired"
                    : `${getDaysLeft(campaign.endDate)} days left`}
                </h4>
              </div>
              <div>
                <span>Participants </span>
                <h4>300</h4>
              </div>
            </div>

            <p>{campaign.description || "No description available."}</p>
          </div>
        ) : (
          <p>Something went wrong.</p>
        )}
      </Modal.Body>
    </Modal>
  );
}
