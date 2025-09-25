import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="Hero-1 Hero-2 Hero-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <div className="Hero-Content wm-md-100 gap-24">
                  <div className="Content">
                    <div>
                      <h4>How to Start Fundraising</h4>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris ni
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
                  </div>
                </div>
                <div className="cat-list">
                  <div>
                    <img src="./img/teamblack.svg" alt="" />
                    <h6>Join as an Organizers</h6>
                  </div>
                  <div>
                    <img src="./img/teamblack.svg" alt="" />
                    <h6>Create Groups</h6>
                  </div>
                  <div>
                    <img src="./img/teamblack.svg" alt="" />
                    <h6>Invite Participants</h6>
                  </div>
                  <div>
                    <img src="./img/teamblack.svg" alt="" />
                    <h6>Supports Sell products </h6>
                  </div>
                  <div>
                    <img src="./img/teamblack.svg" alt="" />
                    <h6>Get your Funds Successfully</h6>
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
