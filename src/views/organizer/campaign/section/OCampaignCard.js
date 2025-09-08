import { Link } from "react-router-dom";
import {
  getAllCampaigns,
  getCampaignById,
} from "../../../../api/Campaign/Campaign";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const OCampaignCard = ({ limit }) => {
  const [campaign, setCampaign] = useState([]);
  const [loading, setLoading] = useState(true);
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

  return (
    <>
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
                          <h6 className="card-title">{campaign.description}</h6>
                        </Link>
                        <div className="product-item__button d-flex mt-20 flex-wrap">
                          <button className="btn btn-update">
                            View Campaign
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
export default OCampaignCard;
