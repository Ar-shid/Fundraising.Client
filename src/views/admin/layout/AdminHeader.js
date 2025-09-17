import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminHeader = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign me out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        Swal.fire("Signed Out!", "You have been logged out.", "success").then(
          () => {
            navigate("/login");
          }
        );
      }
    });
  };

  const token = localStorage.getItem("token");
  let email = "";
  let name = "";
  let unique_name = "";
  let given_name = "";
  if (token) {
    const decoded = jwtDecode(token);
    if (decoded.name) {
      email = decoded.email.split("@")[0];
      name = decoded.name;
      unique_name = decoded.unique_name;
      given_name = decoded.given_name;
    }
  }

  return (
    <>
      <header className="header-top">
        <nav className="navbar navbar-light">
          <div className="navbar-left">
            {/* <a href="#" className="sidebar-toggle">
              <img className="svg" src="./img/svg/bars.svg" alt="img" />
            </a> */}
            <Link to="/" className="navbar-brand">
              <img
                style={{ maxWidth: "200px" }}
                src="/img/logo.png"
                alt="img"
              />
            </Link>
            <form action="" className="search-form">
              <img src="/img/svg/light.svg" alt="" />
              <input
                className="form-control mr-sm-2 box-shadow-none"
                type="Search or type a command"
                placeholder="Search or type a command"
                aria-label="Search or type a command"
              />
            </form>
          </div>
          {/* ends: navbar-left */}
          <div className="navbar-right">
            <ul className="navbar-right__menu">
              <li className="nav-author">
                <div className="dropdown-custom">
                  <a href="javascript:;" className="nav-item-toggle me-5">
                    <img src="/img/svg/base.svg" alt="" />
                    <h4>{name}</h4>
                  </a>
                  <div className="dropdown-wrapper">
                    <div className="nav-author__info">
                      <div className="author-img">
                        <img src="/img/svg/base.svg" alt="" />
                      </div>
                      <div>
                        <h6>{unique_name}</h6>
                        <span>{given_name}</span>
                      </div>
                    </div>
                    <div className="nav-author__options">
                      <ul>
                        <li>
                          <Link to="/profile">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-user"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/setting">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-settings"
                            >
                              <circle cx="12" cy="12" r="3"></circle>
                              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg>{" "}
                            Settings
                          </Link>
                        </li>
                        <li>
                          <Link to="/admin-finance">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-key"
                            >
                              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                            </svg>{" "}
                            Finance
                          </Link>
                        </li>
                      </ul>
                      <button
                        onClick={handleSignOut}
                        className="nav-author__signout"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-log-out"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                          <polyline points="16 17 21 12 16 7"></polyline>
                          <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>{" "}
                        Sign Out
                      </button>
                    </div>
                  </div>
                  {/* ends: .dropdown-wrapper */}
                </div>
              </li>

              {/* <li className="nav-message">
                <div className="dropdown-custom">
                  <Link to="/" className="nav-item-toggle">
                    <img src="./img/icon/msg.png" alt="" />
                  </Link>
                  <div className="dropdown-wrapper">
                    <h2 className="dropdown-wrapper__title">
                      Messages{" "}
                      <span className="badge-circle badge-success ml-1">2</span>
                    </h2>
                    <ul>
                      <li className="author-online has-new-message">
                        <div className="user-avater">
                          <img src="./img/icon/user.png" alt="" />
                        </div>
                        <div className="user-message">
                          <p>
                            <Link
                              to=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              Web Design
                            </Link>
                            <span className="time-posted">3 hrs ago</span>
                          </p>
                          <p>
                            <span
                              className="desc text-truncate"
                              style={{ maxWidth: 215 }}
                            >
                              Lorem ipsum dolor amet cosec Lorem ipsum
                            </span>
                            <span className="msg-count badge-circle badge-success badge-sm">
                              1
                            </span>
                          </p>
                        </div>
                      </li>
                      <li className="author-online has-new-message">
                        <div className="user-avater">
                          <img src="./img/icon/user.png" alt="" />
                        </div>
                        <div className="user-message">
                          <p>
                            <Link
                              to=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              Web Design
                            </Link>
                            <span className="time-posted">3 hrs ago</span>
                          </p>
                          <p>
                            <span
                              className="desc text-truncate"
                              style={{ maxWidth: 215 }}
                            >
                              Lorem ipsum dolor amet cosec Lorem ipsum
                            </span>
                            <span className="msg-count badge-circle badge-success badge-sm">
                              1
                            </span>
                          </p>
                        </div>
                      </li>
                      <li className="author-online has-new-message">
                        <div className="user-avater">
                          <img src="./img/icon/user.png" alt="" />
                        </div>
                        <div className="user-message">
                          <p>
                            <Link
                              to=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              Web Design
                            </Link>
                            <span className="time-posted">3 hrs ago</span>
                          </p>
                          <p>
                            <span
                              className="desc text-truncate"
                              style={{ maxWidth: 215 }}
                            >
                              Lorem ipsum dolor amet cosec Lorem ipsum
                            </span>
                            <span className="msg-count badge-circle badge-success badge-sm">
                              1
                            </span>
                          </p>
                        </div>
                      </li>
                      <li className="author-online has-new-message">
                        <div className="user-avater">
                          <img src="./img/icon/user.png" alt="" />
                        </div>
                        <div className="user-message">
                          <p>
                            <Link
                              to=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              Web Design
                            </Link>
                            <span className="time-posted">3 hrs ago</span>
                          </p>
                          <p>
                            <span
                              className="desc text-truncate"
                              style={{ maxWidth: 215 }}
                            >
                              Lorem ipsum dolor amet cosec Lorem ipsum
                            </span>
                            <span className="msg-count badge-circle badge-success badge-sm">
                              1
                            </span>
                          </p>
                        </div>
                      </li>
                      <li className="author-online has-new-message">
                        <div className="user-avater">
                          <img src="./img/icon/user.png" alt="" />
                        </div>
                        <div className="user-message">
                          <p>
                            <Link
                              to=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              Web Design
                            </Link>
                            <span className="time-posted">3 hrs ago</span>
                          </p>
                          <p>
                            <span
                              className="desc text-truncate"
                              style={{ maxWidth: 215 }}
                            >
                              Lorem ipsum dolor amet cosec Lorem ipsum
                            </span>
                            <span className="msg-count badge-circle badge-success badge-sm">
                              1
                            </span>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <a href="#" className="dropdown-wrapper__more">
                      See All Message
                    </a>
                  </div>
                </div>
              </li> */}
              {/* ends: nav-message */}
              {/* <li className="nav-notification">
                <div className="dropdown-custom">
                  <a href="javascript:;" className="nav-item-toggle">
                    <img src="./img/icon/notification.png" alt="" />
                  </a>
                  <div className="dropdown-wrapper">
                    <h2 className="dropdown-wrapper__title">
                      Notifications{" "}
                      <span className="badge-circle badge-warning ml-1">4</span>
                    </h2>
                    <ul>
                      <li className="nav-notification__single nav-notification__single--unread d-flex flex-wrap">
                        <div className="nav-notification__type nav-notification__type--primary">
                          <span data-feather="inbox" />
                        </div>
                        <div className="nav-notification__details">
                          <p>
                            <a
                              href="#"
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              James
                            </a>
                            <span>sent you a message</span>
                          </p>
                          <p>
                            <span className="time-posted">5 hours ago</span>
                          </p>
                        </div>
                      </li>
                      <li className="nav-notification__single nav-notification__single--unread d-flex flex-wrap">
                        <div className="nav-notification__type nav-notification__type--secondary">
                          <span data-feather="upload" />
                        </div>
                        <div className="nav-notification__details">
                          <p>
                            <a
                              href="#"
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              James
                            </a>
                            <span>sent you a message</span>
                          </p>
                          <p>
                            <span className="time-posted">5 hours ago</span>
                          </p>
                        </div>
                      </li>
                      <li className="nav-notification__single nav-notification__single--unread d-flex flex-wrap">
                        <div className="nav-notification__type nav-notification__type--success">
                          <span data-feather="log-in" />
                        </div>
                        <div className="nav-notification__details">
                          <p>
                            <a
                              href="#"
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              James
                            </a>
                            <span>sent you a message</span>
                          </p>
                          <p>
                            <span className="time-posted">5 hours ago</span>
                          </p>
                        </div>
                      </li>
                      <li className="nav-notification__single nav-notification__single d-flex flex-wrap">
                        <div className="nav-notification__type nav-notification__type--info">
                          <span data-feather="at-sign" />
                        </div>
                        <div className="nav-notification__details">
                          <p>
                            <a
                              href="#"
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              James
                            </a>
                            <span>sent you a message</span>
                          </p>
                          <p>
                            <span className="time-posted">5 hours ago</span>
                          </p>
                        </div>
                      </li>
                      <li className="nav-notification__single nav-notification__single d-flex flex-wrap">
                        <div className="nav-notification__type nav-notification__type--danger">
                          <span data-feather="heart" />
                        </div>
                        <div className="nav-notification__details">
                          <p>
                            <a
                              href="#"
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              James
                            </a>
                            <span>sent you a message</span>
                          </p>
                          <p>
                            <span className="time-posted">5 hours ago</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <a href="#" className="dropdown-wrapper__more">
                      See all incoming activity
                    </a>
                  </div>
                </div>
              </li> */}
              {/* ends: .nav-notification */}
              {/* <li className="nav-settings">
                <div className="dropdown-custom">
                  <a href="javascript:;" className="nav-item-toggle">
                    <span data-feather="settings" />
                  </a>
                  <div className="dropdown-wrapper dropdown-wrapper--large">
                    <ul className="list-settings">
                      <li className="d-flex">
                        <div className="mr-3">
                          <img src="img/mail.png" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <h6>
                            <a href="#" className="stretched-link">
                              All Features
                            </a>
                          </h6>
                          <p>Introducing Increment subscriptions </p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="mr-3">
                          <img src="img/color-palette.png" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <h6>
                            <a href="#" className="stretched-link">
                              Themes
                            </a>
                          </h6>
                          <p>Third party themes that are compatible</p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="mr-3">
                          <img src="img/home.png" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <h6>
                            <a href="#" className="stretched-link">
                              Payments
                            </a>
                          </h6>
                          <p>We handle billions of dollars</p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="mr-3">
                          <img src="img/video-camera.png" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <h6>
                            <a href="#" className="stretched-link">
                              Design Mockups
                            </a>
                          </h6>
                          <p>Share planning visuals with clients</p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="mr-3">
                          <img src="img/document.png" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <h6>
                            <a href="#" className="stretched-link">
                              Content Planner
                            </a>
                          </h6>
                          <p>Centralize content gethering and editing</p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="mr-3">
                          <img src="img/microphone.png" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <h6>
                            <a href="#" className="stretched-link">
                              Diagram Maker
                            </a>
                          </h6>
                          <p>Plan user flows &amp; test scenarios</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li> */}
              {/* ends: .nav-settings */}
              {/* <li className="nav-support">
                <div className="dropdown-custom">
                  <a href="javascript:;" className="nav-item-toggle">
                    <span data-feather="help-circle" />
                  </a>
                  <div className="dropdown-wrapper">
                    <div className="list-group">
                      <span>Documentation</span>
                      <ul>
                        <li>
                          <a href="#">How to customize admin</a>
                        </li>
                        <li>
                          <a href="#">How to use</a>
                        </li>
                        <li>
                          <a href="#">The relation of vertical spacing</a>
                        </li>
                      </ul>
                    </div>
                    <div className="list-group">
                      <span>Payments</span>
                      <ul>
                        <li>
                          <a href="#">How to customize admin</a>
                        </li>
                        <li>
                          <a href="#">How to use</a>
                        </li>
                      </ul>
                    </div>
                    <div className="list-group">
                      <span>Content Planner</span>
                      <ul>
                        <li>
                          <a href="#">How to customize admin</a>
                        </li>
                        <li>
                          <a href="#">How to use</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li> */}
              {/* ends: .nav-support */}
              {/* <li className="nav-flag-select">
                <div className="dropdown-custom">
                  <a href="javascript:;" className="nav-item-toggle">
                    <img src="img/flag.png" alt="" className="rounded-circle" />
                  </a>
                  <div className="dropdown-wrapper dropdown-wrapper--small">
                    <a href="#">
                      <img src="img/eng.png" alt="" /> English
                    </a>
                    <a href="#">
                      <img src="img/ger.png" alt="" /> German
                    </a>
                    <a href="#">
                      <img src="img/spa.png" alt="" /> Spanish
                    </a>
                    <a href="#">
                      <img src="img/tur.png" alt="" /> Turkish
                    </a>
                  </div>
                </div>
              </li> */}
              {/* ends: .nav-flag-select */}
            </ul>
            {/* ends: .navbar-right__menu */}
            <div className="navbar-right__mobileAction d-md-none">
              <a href="#" className="btn-search">
                <span data-feather="search" />
                <span data-feather="x" />
              </a>
              <a href="#" className="btn-author-action">
                <span data-feather="more-vertical" />
              </a>
            </div>
          </div>
          {/* ends: .navbar-right */}
        </nav>
      </header>
    </>
  );
};
export default AdminHeader;
