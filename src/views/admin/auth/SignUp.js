import { Link, useNavigate } from "react-router-dom";
import { register } from "../../../api/Auth/Auth";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

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

  const registerUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      firstName,
      lastName,
      middleName: middleName || "",
      userName: email,
      email,
      password,
      roles: [role],
    };

    try {
      const response = await register(data);
      toast.success("User created successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 7000);
    } catch (error) {
      const backendErrors = error.response?.data;
      if (backendErrors?.errors) {
        showErrorsInToast(backendErrors.errors);
      } else {
        showErrorsInToast(backendErrors);
      }
    } finally {
      setIsLoading(false);
      // Stop loading in all cases
    }
  };

  return (
    <>
      <ToastContainer />

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
                    Welcome to your fundraising app – the smarter way to connect
                    with the right programs, manage your campaigns, and achieve
                    your goals with ease.
                  </p>
                </div>
                <div className="custom_form">
                  <form onSubmit={registerUser}>
                    <div className="row">
                      <div className="col-6">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control field"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setfirstName(e.target.value)}
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control field"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setlastName(e.target.value)}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control field"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-12">
                        <select
                          className="form-control"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        >
                          <option>Your Role</option>
                          <option value="Sales Person">Sale Person</option>
                          <option value="Organizer">Organizer</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Create Password</label>
                        <input
                          type="password"
                          className="form-control field"
                          placeholder="Set Your Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      {/* <div class="stylish-checkbox">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label m-0" for="exampleCheck1">
                          <span class="custom-box"></span>
                          <span style={{ marginTop: "2px" }}>Remember me</span>
                        </label>
                      </div> */}
                    </div>

                    <button
                      type="submit"
                      className="btn register"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span>
                          <span className="spinner"></span> Signing Up...
                        </span>
                      ) : (
                        "Sign Up"
                      )}
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
