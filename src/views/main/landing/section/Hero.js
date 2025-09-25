import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="Hero-1">
        <div className="Background">
          <div className="Rectangle-One">
            {/* <img src="./img/blurleft.svg" /> */}
          </div>
          <div className="Rectangle-Two">
            {/* <img src="./img/blurright.svg" /> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-content">
                <img src="/img/herobanner.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="Hero-Content wm-md-100 gap-24">
                <div className="Content">
                  <div>
                    <h4>We are Fundraising</h4>
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris ni
                    </p>
                  </div>
                  <div class="btns">
                    <Link to="" class="start">
                      Start Fundraising
                    </Link>
                    <Link to="" class="explore">
                      How It Works
                    </Link>
                  </div>
                  <div className="cat">
                    <div>
                      <img src="./img/school.svg" alt="" />
                      <h6>For School</h6>
                    </div>
                    <div>
                      <img src="./img/team.svg" alt="" />
                      <h6>For Supports Teams</h6>
                    </div>
                    <div>
                      <img src="./img/non.svg" alt="" />
                      <h6>Non-Profit Organizations</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
