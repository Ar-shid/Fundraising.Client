import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const RelatedProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // variableWidth: true,
  };
  return (
    <>
      <section className="RelatedProduct">
        <div className="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <div class="heading">
                  <h4>Related Products</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Slider className="campaignslider" {...settings}>
                <div className="card">
                  <img src="./img/noimg.svg" alt="" />
                  <div className="detail">
                    <h4>Purifying Green Tea Clay Mask</h4>
                    <div className="stars-rating d-flex align-items-center">
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon half">★</span>
                      <span className="stars-rating__point">(4.5)</span>
                      <span className="stars-rating__review">250 Reviews</span>
                    </div>
                    <h5>$19.99</h5>
                    <Link
                      style={{ color: "#fff" }}
                      to=""
                      className="start d-flex align-items-center py-2"
                    >
                      <img
                        className="px-2"
                        style={{ marginTop: "-2px", marginBottom: "0px" }}
                        src="./img/bag.svg"
                        alt=""
                      />
                      ADD TO BAG
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <img src="./img/noimg.svg" alt="" />
                  <div className="detail">
                    <h4>Purifying Green Tea Clay Mask</h4>
                    <div className="stars-rating d-flex align-items-center">
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon half">★</span>
                      <span className="stars-rating__point">(4.5)</span>
                      <span className="stars-rating__review">250 Reviews</span>
                    </div>
                    <h5>$19.99</h5>
                    <Link
                      style={{ color: "#fff" }}
                      to=""
                      className="start d-flex align-items-center py-2"
                    >
                      <img
                        className="px-2"
                        style={{ marginTop: "-2px", marginBottom: "0px" }}
                        src="./img/bag.svg"
                        alt=""
                      />
                      ADD TO BAG
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <img src="./img/noimg.svg" alt="" />
                  <div className="detail">
                    <h4>Purifying Green Tea Clay Mask</h4>
                    <div className="stars-rating d-flex align-items-center">
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon half">★</span>
                      <span className="stars-rating__point">(4.5)</span>
                      <span className="stars-rating__review">250 Reviews</span>
                    </div>
                    <h5>$19.99</h5>
                    <Link
                      style={{ color: "#fff" }}
                      to=""
                      className="start d-flex align-items-center py-2"
                    >
                      <img
                        className="px-2"
                        style={{ marginTop: "-2px", marginBottom: "0px" }}
                        src="./img/bag.svg"
                        alt=""
                      />
                      ADD TO BAG
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <img src="./img/noimg.svg" alt="" />
                  <div className="detail">
                    <h4>Purifying Green Tea Clay Mask</h4>
                    <div className="stars-rating d-flex align-items-center">
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon half">★</span>
                      <span className="stars-rating__point">(4.5)</span>
                      <span className="stars-rating__review">250 Reviews</span>
                    </div>
                    <h5>$19.99</h5>
                    <Link
                      style={{ color: "#fff" }}
                      to=""
                      className="start d-flex align-items-center py-2"
                    >
                      <img
                        className="px-2"
                        style={{ marginTop: "-2px", marginBottom: "0px" }}
                        src="./img/bag.svg"
                        alt=""
                      />
                      ADD TO BAG
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <img src="./img/noimg.svg" alt="" />
                  <div className="detail">
                    <h4>Purifying Green Tea Clay Mask</h4>
                    <div className="stars-rating d-flex align-items-center">
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon half">★</span>
                      <span className="stars-rating__point">(4.5)</span>
                      <span className="stars-rating__review">250 Reviews</span>
                    </div>
                    <h5>$19.99</h5>
                    <Link
                      style={{ color: "#fff" }}
                      to=""
                      className="start d-flex align-items-center py-2"
                    >
                      <img
                        className="px-2"
                        style={{ marginTop: "-2px", marginBottom: "0px" }}
                        src="./img/bag.svg"
                        alt=""
                      />
                      ADD TO BAG
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <img src="./img/noimg.svg" alt="" />
                  <div className="detail">
                    <h4>Purifying Green Tea Clay Mask</h4>
                    <div className="stars-rating d-flex align-items-center">
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon half">★</span>
                      <span className="stars-rating__point">(4.5)</span>
                      <span className="stars-rating__review">250 Reviews</span>
                    </div>
                    <h5>$19.99</h5>
                    <Link
                      style={{ color: "#fff" }}
                      to=""
                      className="start d-flex align-items-center py-2"
                    >
                      <img
                        className="px-2"
                        style={{ marginTop: "-2px", marginBottom: "0px" }}
                        src="./img/bag.svg"
                        alt=""
                      />
                      ADD TO BAG
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <img src="./img/noimg.svg" alt="" />
                  <div className="detail">
                    <h4>Purifying Green Tea Clay Mask</h4>
                    <div className="stars-rating d-flex align-items-center">
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon active">★</span>
                      <span className="star-icon half">★</span>
                      <span className="stars-rating__point">(4.5)</span>
                      <span className="stars-rating__review">250 Reviews</span>
                    </div>
                    <h5>$19.99</h5>
                    <Link
                      style={{ color: "#fff" }}
                      to=""
                      className="start d-flex align-items-center py-2"
                    >
                      <img
                        className="px-2"
                        style={{ marginTop: "-2px", marginBottom: "0px" }}
                        src="./img/bag.svg"
                        alt=""
                      />
                      ADD TO BAG
                    </Link>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default RelatedProduct;
