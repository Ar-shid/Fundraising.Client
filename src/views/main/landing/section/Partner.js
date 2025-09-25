import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Partner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
      <section className="Partner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h4>OUR SUPPORT</h4>
              </div>
              <Slider {...settings}>
                <div>
                  <img src="./img/support1.svg" alt="" />
                </div>
                <div>
                  <img src="./img/support2.svg" alt="" />
                </div>
                <div>
                  <img src="./img/support3.svg" alt="" />
                </div>
                <div>
                  <img src="./img/support4.svg" alt="" />
                </div>
                <div>
                  <img src="./img/support5.svg" alt="" />
                </div>
                <div>
                  <img src="./img/support6.svg" alt="" />
                </div>
                <div>
                  <img src="./img/support1.svg" alt="" />
                </div>
                <div>
                  <img src="./img/support2.svg" alt="" />
                </div>
                <div>
                  <img src="./img/support3.svg" alt="" />
                </div>
                <div>
                  <img src="./img/support4.svg" alt="" />
                </div>
                <div>
                  <img src="./img/support5.svg" alt="" />
                </div>
                <div>
                  <img src="./img/support6.svg" alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Partner;
