import { Link } from "react-router-dom";
import { useState } from "react";
import { updateEmail } from "../../../../api/Auth/Auth";
import { jwtDecode } from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button, Form } from "react-bootstrap";

const SignInMethod = () => {
  const token = localStorage.getItem("token");
  let emailAddress = "";
  if (token) {
    const decoded = jwtDecode(token);
    if (decoded.name) {
      emailAddress = decoded.email;
    }
  }
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState(emailAddress); // current email
  const [newEmail, setNewEmail] = useState(email);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = () => {
    setNewEmail(email); // pre-fill with current email
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdateEmail = async () => {
    if (!newEmail) {
      toast.error("Email cannot be empty!");
      return;
    }
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token"); // direct localStorage se
      if (!token) return;
      await updateEmail(newEmail, token);

      setEmail(newEmail); // update displayed email
      toast.success("Email updated successfully!");
      setShowModal(false);
      localStorage.removeItem("token");
      setTimeout(() => {
        window.location.href = "/login"; // redirect to login
      }, 1500);
    } catch (err) {
      console.error("Update error:", err);
      toast.error(err.response?.data?.message || "Error updating email!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="col-lg-12">
        <div className="card card-Vertical card-default campaign-form card-md mb-4">
          <div className="card-header">
            <h5>Sign in method</h5>
          </div>
          <div className="card-body p-5">
            <div className="setting">
              <div className="left">
                <h4>Email Address</h4>
                <p>{email}</p>
              </div>
              <div className="right">
                {/* <Link className="email" to="/profile">
                  Change email
                </Link> */}
                <Button
                  className="email"
                  variant="link"
                  onClick={handleOpenModal}
                >
                  Change email
                </Button>
              </div>
            </div>
            <div className="setting">
              <div className="left">
                <h4>Password</h4>
                <p>*******************</p>
              </div>
              <div className="right">
                <Link className="email" to="/forgot-password">
                  Change password
                </Link>
              </div>
            </div>
            <div className="setting withbg">
              <div className="left">
                <div>
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0047 0L0.23468 4V10C0.23468 15.55 5.25657 20.74 12.0047 22C18.7529 20.74 23.7748 15.55 23.7748 10V4L12.0047 0ZM9.38916 16L4.15803 12L6.002 10.59L9.38916 13.17L18.0075 6.58L19.8514 8L9.38916 16Z"
                      fill="#70B6C1"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Secure Your Account</h4>
                  <p>
                    Two-factor authentication adds an extra layer of security to
                    your account. To log in, in addition you'll need to provide
                    a 6 digit code
                  </p>
                </div>
              </div>
              <div className="right">
                <Link className="email" to="">
                  Enable
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        style={{ zIndex: "9999999" }}
        show={showModal}
        onHide={handleCloseModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn PrimaryBtn"
            onClick={handleUpdateEmail}
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update"}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SignInMethod;
