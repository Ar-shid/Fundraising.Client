import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const GroupList = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
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
      <section className="CampaignList GroupList">
        <Slider className="campaignslider" {...settings}>
          <div className="card">
            <img src="./img/noimg.svg" alt="" />
            <div className="detail">
              <h4>This is Title</h4>
              <p>Nullam justo sagi feugianun euismod</p>
              <div className="progress"></div>
              <h5>$50,000 of $10,000 reached.</h5>
              <Link to="" className="help">
                Join Now
              </Link>
            </div>
          </div>
          <div className="card">
            <img src="./img/noimg.svg" alt="" />
            <div className="detail">
              <h4>This is Title</h4>
              <p>Nullam justo sagi feugianun euismod</p>
              <div className="progress"></div>
              <h5>$50,000 of $10,000 reached.</h5>
              <Link to="" className="help">
                Join Now
              </Link>
            </div>
          </div>
          <div className="card">
            <img src="./img/noimg.svg" alt="" />
            <div className="detail">
              <h4>This is Title</h4>
              <p>Nullam justo sagi feugianun euismod</p>
              <div className="progress"></div>
              <h5>$50,000 of $10,000 reached.</h5>
              <Link to="" className="help">
                Join Now
              </Link>
            </div>
          </div>
          <div className="card">
            <img src="./img/noimg.svg" alt="" />
            <div className="detail">
              <h4>This is Title</h4>
              <p>Nullam justo sagi feugianun euismod</p>
              <div className="progress"></div>
              <h5>$50,000 of $10,000 reached.</h5>
              <Link to="" className="help">
                Join Now
              </Link>
            </div>
          </div>
          <div className="card">
            <img src="./img/noimg.svg" alt="" />
            <div className="detail">
              <h4>This is Title</h4>
              <p>Nullam justo sagi feugianun euismod</p>
              <div className="progress"></div>
              <h5>$50,000 of $10,000 reached.</h5>
              <Link to="" className="help">
                Join Now
              </Link>
            </div>
          </div>
          <div className="card">
            <img src="./img/noimg.svg" alt="" />
            <div className="detail">
              <h4>This is Title</h4>
              <p>Nullam justo sagi feugianun euismod</p>
              <div className="progress"></div>
              <h5>$50,000 of $10,000 reached.</h5>
              <Link to="" className="help">
                Join Now
              </Link>
            </div>
          </div>
          <div className="card">
            <img src="./img/noimg.svg" alt="" />
            <div className="detail">
              <h4>This is Title</h4>
              <p>Nullam justo sagi feugianun euismod</p>
              <div className="progress"></div>
              <h5>$50,000 of $10,000 reached.</h5>
              <Link to="" className="help">
                Join Now
              </Link>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};
export default GroupList;
