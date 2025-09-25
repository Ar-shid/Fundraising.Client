import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
const UserHeader = () => {
  return (
    <>
      <Navbar fixed="top" expand="lg" className="custom-header destkop">
        <Container>
          <div className="header">
            <Navbar.Brand>
              <Link to="/">
                <img src="./img/logo.png" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/categories" className="nav-link">
                  Categories
                </Link>
                {/* <NavDropdown
                  title="Fundraising Categories"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <Link to="" className="nav-link">
                      TExt
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    {" "}
                    <Link to="/" className="nav-link">
                      Text
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Link to="/howitwork" className="nav-link">
                  How it Works
                </Link>
              </Nav>
            </Navbar.Collapse>
            <div className="gap-md d-flex align-items-center ">
              <Link to="/login" className="start">
                Log In
              </Link>
            </div>
          </div>
        </Container>
      </Navbar>

      {[false].map((expand) => (
        <Navbar
          fixed="top"
          key={expand}
          expand={expand}
          className="custom-header mobile"
        >
          <Container>
            <div className="header">
              <Navbar.Brand>
                <Link to="/">
                  <img src="/img/svg/logo.svg" />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Link to="/">
                      <img src="/img/svg/logo.svg" />
                    </Link>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown title="Product" id="basic-nav-dropdown">
                      <NavDropdown.Item>
                        <Link to="/product" className="nav-link">
                          Product
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        {" "}
                        <Link to="/" className="nav-link">
                          Embryo
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Link to="/science" className="nav-link">
                      Science
                    </Link>
                    <Link to="/clinic" className="nav-link">
                      For clinicians
                    </Link>
                    <NavDropdown title="Company" id="basic-nav-dropdown">
                      <NavDropdown.Item>
                        <Link to="/resources" className="nav-link">
                          Resources
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <Link to="/contact" className="nav-link">
                          Contact
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <Link to="/career" className="nav-link">
                          Career
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <div className="gap-md d-flex align-items-center mt-3">
                      <Link to="/login" className="btn btn-outline">
                        Log In
                      </Link>
                      <Link to="/signup" className="btn btn-back">
                        Get Access
                      </Link>
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
export default UserHeader;
