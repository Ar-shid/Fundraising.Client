import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../api/Auth/Auth";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    try {
      const response = await login(data);
      const { token, user } = response;
      localStorage.setItem("token", token);
      toast.success("LogIn successfully!");
      navigate("/admin-home");
    } catch (e) {
      console.log("loginUser error:", e);
    } finally {
      // setIsLoading(false);
      // Stop loading in all cases
    }
  };

  return (
    <>
      <ToastContainer />
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
                          type="email"
                          className="form-control field"
                          placeholder="Enter Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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

                    <button
                      onClick={loginUser}
                      // type="submit"
                      className="btn register"
                    >
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
