import { Link, useNavigate } from "react-router-dom";
import { login, getOrganizers } from "../../../api/Auth/Auth";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";

const showErrorsInToast = (errors) => {
  if (Array.isArray(errors)) {
    // Case: password policy (array of objects with description)
    errors.forEach((err) => {
      toast.error(err.description || err.message || JSON.stringify(err));
    });
  } else if (typeof errors === "object" && errors !== null) {
    // Case: validation errors object
    Object.values(errors).forEach((errorArray) => {
      if (Array.isArray(errorArray)) {
        errorArray.forEach((msg) => toast.error(msg));
      }
    });
  } else {
    // Fallback (string or unexpected)
    toast.error(errors?.toString() || "Something went wrong!");
  }
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Load saved credentials if available
    const savedEmail = localStorage.getItem("rememberEmail");
    const savedPassword = localStorage.getItem("rememberPassword");

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const loginUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      email,
      password,
    };

    try {
      const response = await login(data);
      // const { token } = response;
      const token = response?.data?.token; // if you're using axios
      localStorage.setItem("token", token);

      let given_name = "";

      if (token) {
        const decoded = jwtDecode(token);
        if (decoded.given_name) {
          given_name = decoded.given_name;
          localStorage.setItem("given_name", given_name);
        }
      }

      if (rememberMe) {
        localStorage.setItem("rememberEmail", email);
        localStorage.setItem("rememberPassword", password);
      } else {
        localStorage.removeItem("rememberEmail");
        localStorage.removeItem("rememberPassword");
      }

      // Fetch organizers after successful login
      try {
        const organizersResponse = await getOrganizers(token);
        if (organizersResponse?.data && organizersResponse.data.length > 0) {
          // Get the first organizer's ID and save it
          const firstOrganizer = organizersResponse.data[0];
          localStorage.setItem("organizerId", firstOrganizer.id);
          localStorage.setItem("organizerName", firstOrganizer.name);
          console.log("Organizer saved:", firstOrganizer);
        }
      } catch (organizerError) {
        console.error("Error fetching organizers:", organizerError);
        // Don't block login if organizers fetch fails
      }

      toast.success("LogIn successfully!");
      navigate("/admin-home");
    } catch (error) {
      const backendErrors = error.response?.data;
      if (backendErrors?.errors) {
        showErrorsInToast(backendErrors.errors);
      } else if (backendErrors.message) {
        toast.error(backendErrors.message);
      } else {
        showErrorsInToast(backendErrors);
      }
      console.log("loginUser error:", e);
    } finally {
      setIsLoading(false);
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
                    Welcome to your fundraising app – the smarter way to connect
                    with the right programs, manage your campaigns, and achieve
                    your goals with ease.
                  </p>
                </div>
                <div className="custom_form">
                  <form onSubmit={loginUser}>
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
                      <div className="col-12 pass">
                        <div className="d-flex  justify-content-between align-items-center">
                          <label className="form-label">Password</label>
                          <Link to="/forgot-password" className="forgot">
                            Forgot password?
                          </Link>
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control field"
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                          className="forgot"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <img
                              src="./img/icon/hide.png"
                              style={{ width: "24px" }}
                              alt=""
                            />
                          ) : (
                            <img
                              src="./img/icon/show.png"
                              style={{ width: "24px" }}
                              alt=""
                            />
                          )}
                        </span>
                      </div>

                      <div class="stylish-checkbox">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="rememberMe"
                          checked={rememberMe}
                          onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label class="form-check-label m-0" for="rememberMe">
                          <span class="custom-box"></span>
                          <span style={{ marginTop: "2px" }}>Remember me</span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn register"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span>
                          <span className="spinner"></span> Logging in...
                        </span>
                      ) : (
                        "Login"
                      )}
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
