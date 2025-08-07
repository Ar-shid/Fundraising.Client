import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <section className="auth register">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="topbar">
                <img src="./img/logo.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-6">
              <div className="left-content">
                <div className="text-center">
                  <h4>Welcome back to fundraising</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor i
                  </p>
                </div>
                <div className="custom_form">
                  <form>
                    <div className="row">
                      <div className="col-6">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control field"
                          placeholder="Enter Here"
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control field"
                          placeholder="Enter Here"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Email Address</label>
                        <input
                          type="text"
                          className="form-control field"
                          placeholder="Enter Here"
                        />
                      </div>
                      <div className="col-12">
                        <select className="form-control">
                          <option>What you want to be</option>
                          <option>Become an Organizer</option>
                          <option>Become Sale Person</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Create Password</label>
                        <input
                          type="password"
                          className="form-control field"
                          placeholder="**********"
                        />
                      </div>
                      <div class="stylish-checkbox">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label m-0" for="exampleCheck1">
                          <span class="custom-box"></span>
                          <span style={{ marginTop: "2px" }}>Remember me</span>
                        </label>
                      </div>
                    </div>

                    <button type="submit" className="btn register">
                      Sign up
                    </button>
                    <p className="login-btn">
                      Already have an account? <Link to="/login">Log in</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="right-content">
                <div className="banner">
                  <img
                    style={{
                      height: "80vh",
                    }}
                    className="w-100 ps-5"
                    src="./img/authbanner.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignUp;
