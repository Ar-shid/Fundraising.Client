import { Link, useNavigate } from "react-router-dom";
import { forgot } from "../../../api/Auth/Auth";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { runAllTests } from "../../../api/test-apis";
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
const ForgotPass = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const sendemail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { email };

    try {
      const response = await forgot(data);

      console.log("forgot", response.data);
      const token = response.data?.token; // safer with ?.
      toast.success("Instruction sent to your Email Address");

      if (token) {
        navigate(
          `/reset-password?email=${encodeURIComponent(
            email
          )}&token=${encodeURIComponent(token)}`
        );
      } else {
        toast.error("No reset token received from server");
      }
    } catch (error) {
      const backendErrors = error?.response?.data;
      if (backendErrors?.errors) {
        showErrorsInToast(backendErrors.errors);
      } else if (backendErrors?.message) {
        toast.error(backendErrors.message);
      } else {
        showErrorsInToast(backendErrors);
      }
      console.log("forgot password error:", error); // 👈 fixed
    } finally {
      setIsLoading(false);
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
                  <h4>Forgot Password?</h4>
                  <p>
                    Enter the email address you used when you joined and we’ll
                    send you instructions to reset your password.
                  </p>
                </div>
                <div className="custom_form">
                  <form onSubmit={sendemail}>
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
                    </div>

                    <button
                      type="submit"
                      className="btn register"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span>
                          <span className="spinner"></span> Reset Your Password
                        </span>
                      ) : (
                        "Reset Your Password"
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
export default ForgotPass;
