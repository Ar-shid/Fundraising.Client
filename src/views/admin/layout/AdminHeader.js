import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AdminHeader = () => {
  const token = localStorage.getItem("token");
  let email = "";
  let name = "";

  if (token) {
    const decoded = jwtDecode(token);
    if (decoded.name) {
      email = decoded.email.split("@")[0];
      name = decoded.name;
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
                src="./img/logo.png"
                alt="img"
              />
            </Link>
            <form action="" className="search-form">
              <img src="./img/svg/light.svg" alt="" />
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
                    {/* <img
                      src="./img/icon/user.png"
                      alt=""
                      className="rounded-circle"
                    /> */}
                    {name}
                  </a>
                  <div className="dropdown-wrapper">
                    <div className="nav-author__info">
                      <div className="author-img">
                        <img
                          src="img/author-nav.jpg"
                          alt=""
                          className="rounded-circle"
                        />
                      </div>
                      <div>
                        <h6>{name}</h6>
                        <span>UI Designer</span>
                      </div>
                    </div>
                    <div className="nav-author__options">
                      <ul>
                        <li>
                          <a href="#">
                            <span data-feather="user" /> Profile
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span data-feather="settings" /> Settings
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span data-feather="key" /> Billing
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span data-feather="users" /> Activity
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span data-feather="bell" /> Help
                          </a>
                        </li>
                      </ul>
                      <a href="#" className="nav-author__signout">
                        <span data-feather="log-out" /> Sign Out
                      </a>
                    </div>
                  </div>
                  {/* ends: .dropdown-wrapper */}
                </div>
              </li>

              <li className="nav-message">
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
              </li>
              {/* ends: nav-message */}
              <li className="nav-notification">
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
              </li>
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
