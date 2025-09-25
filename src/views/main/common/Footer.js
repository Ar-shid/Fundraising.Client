import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="newsletter">
                <h4>Newsletter</h4>
                <p>
                  Promi pellentesque viverra enimon faucibus blandit magna
                  tellus sagittis aenean.
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                ></input>
                <button className="btn" type="submit">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <p className="desc">
                Elit sit risus lorem proin eget eu molestie nibh odioa non neque
                turpis proin viverra velarcu venenatis nulla frin blandit
                tristique morbi nulla curabitur etiam vestibulum suscipit nullam
                sagittis.
              </p>
              <div className="footer-links">
                <div className="links">
                  <h4>About</h4>
                  <ul className="list-inline">
                    <li>
                      <Link to="/">Career</Link>
                    </li>
                    <li>
                      <Link to="">Angel Investor</Link>
                    </li>
                    <li>
                      <Link to="/">Terms of Service</Link>
                    </li>
                    <li>
                      <Link to="/">Legal Information</Link>
                    </li>
                    <li>
                      <Link to="/">Credits</Link>
                    </li>
                  </ul>
                </div>
                <div className="links">
                  <h4>Quick Links</h4>
                  <ul className="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">Services</Link>
                    </li>
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">News</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="links">
                  <h4>Contact Us</h4>
                  <ul className="list-inline">
                    <li>
                      <Link to="">
                        <span>
                          <img src="./img/map.svg" alt="" />
                        </span>
                        021 Hollywood Boulevard, Los Angeles
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <span>
                          <img src="./img/email.svg" alt="" />
                        </span>
                        info@yourdomain.com
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span>
                          <img src="./img/tel.png" alt="" />
                        </span>
                        (021) 345-6789
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright">
                <div className="text">
                  <p>© 2021 Wehelp. All rights reserved.</p>
                </div>
                <div className="logo">
                  <Link to="">
                    <img src="./img/fb.svg" />
                  </Link>
                  <Link to="">
                    <img src="./img/twitter.svg" />
                  </Link>
                  <Link to="">
                    <img src="./img/insta.svg" />
                  </Link>
                  <Link to="">
                    <img src="./img/yt.svg" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
