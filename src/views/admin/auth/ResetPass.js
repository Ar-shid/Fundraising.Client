import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { reset } from "../../../api/Auth/Auth";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
const ResetPass = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setnewPassword] = useState("");
  const navigate = useNavigate();

  const sendpass = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      email,
      token,
      newPassword,
    };
    try {
      const response = await reset(data);

      console.log("forgot", response.data);
      toast.success("Password Change Successfully");

      setTimeout(() => {
        navigate("/login");
      }, 7000);
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
                  <h4>Reset Password?</h4>
                  <p>Change your password to get access of your screen</p>
                </div>
                <div className="custom_form">
                  <form onSubmit={sendpass}>
                    <div className="row">
                      <div className="col-12">
                        <label className="form-label">Update Password</label>
                        <input
                          type="password"
                          className="form-control field"
                          placeholder="Enter Your Password"
                          value={newPassword}
                          onChange={(e) => setnewPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn register"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span>
                          <span className="spinner"></span> Change Password
                        </span>
                      ) : (
                        "Change Password"
                      )}
                    </button>
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
export default ResetPass;
