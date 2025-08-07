import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <section className="auth login">
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
                      <div className="col-12">
                        <label className="form-label">Email Address</label>
                        <input
                          type="text"
                          className="form-control field"
                          placeholder="Enter Here"
                        />
                      </div>
                      <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                          <label className="form-label">Password</label>
                          <Link to="/" className="forgot">
                            Forgot password?
                          </Link>
                        </div>
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
                      Login
                    </button>
                    <p className="login-btn">
                      Don’t have an account?{" "}
                      <Link to="/register">create one</Link>
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
export default Login;
