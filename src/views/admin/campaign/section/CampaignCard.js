const CampaignCard = () => {
  return (
    <>
      <div className="cus-xl-3 col-lg-3 col-md-11 col-12 mb-30 px-10">
        <div className="card campaign-card product product--grid">
          <div className="h-100">
            <div className="product-item">
              <div className="product-item__image">
                {/* <span className="like-icon">
                  <button type="button" className="content-center">
                    <i className="lar la-heart icon" />
                  </button>
                </span> */}
                <a href="#">
                  <img
                    className="card-img-top img-fluid"
                    src="./img/campaign.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="card-body px-20 pb-25 pt-20">
                <div className="product-item__body text-capitalize">
                  <a href="product-details.html">
                    <h6 className="card-title">Montes scelerisque</h6>
                  </a>
                  <div className="d-flex align-items-center mb-10 flex-wrap">
                    <span className="product-desc-price">$200.00</span>
                    <span className="product-price">$100.00</span>
                    <span className="product-discount">50% Off</span>
                  </div>
                </div>
                <div className="product-item__footer">
                  <div className="stars-rating d-flex align-items-center flex-wrap">
                    <span className="star-icon las la-star active" />
                    <span className="star-icon las la-star active" />
                    <span className="star-icon las la-star active" />
                    <span className="star-icon las la-star active" />
                    <span className="star-icon las la-star-half-alt active" />
                    <span className="stars-rating__point">4.9</span>
                    <span className="stars-rating__review">
                      <span>778</span> Reviews
                    </span>
                  </div>
                </div>
                <div className="product-item__button d-flex mt-20 flex-wrap">
                  <button className="btn btn-default btn-squared btn-outline-light px-15 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-bag"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    Add To Cart
                  </button>
                  <button className="btn btn-primary btn-default btn-squared border-0 ">
                    Updat Campaign
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CampaignCard;
