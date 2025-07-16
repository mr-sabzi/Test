import "./Footer.css";
import Icon from "../Icon";
function Footer() {
  return (
    <>


      <footer className="footer">
        <div className="bala-section">
          <h2 className="bala-title">
            STAY UPTO DATE ABOUT
            <br /> OUR LATEST OFFERS
          </h2>
          <div className="bala-form">
            <input
              type="email"
              className="bala-form-inp sdgtesa"
              placeholder="Enter your email address"
            />
            <button className="bala-form-inp  ">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        <div className="main-footer">
          <div className="footer-brand">
            <h1>SHOP.CO</h1>
            <p>
              We have clothes that suits your style and
              <br />
              which you’re proud to wear. From <br />
              cwomen to men.
            </p>
            <div className="social-icons">
              <span>
                <Icon name="X" />
              </span>
              <span>
                <Icon name="F" />
              </span>
              <span>
                <Icon name="In" />
              </span>
              <span>
                <Icon name="Git" />
              </span>
            </div>
          </div>

          <div className="footer-links">
            <div className="column">
              <h3 className="column-h1">COMPANY</h3>
              <ul className="column-ul">
                <li className="sadasdas">About</li>
                <li className="sadasdas">Features</li>
                <li className="sadasdas">Works</li>
                <li className="sadasdas">Career</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="column-h1">HELP</h3>
              <ul className="column-ul">
                <li className="sadasdas">Customer Support</li>
                <li className="sadasdas">Delivery Details</li>
                <li className="sadasdas">Terms & Conditions</li>
                <li className="sadasdas">Privacy Policy</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="column-h1">FAQ</h3>
              <ul  className="column-ul">
                <li className="sadasdas">Account</li>
                <li className="sadasdas">Manage Deliveries</li>
                <li className="sadasdas">Orders</li>
                <li className="sadasdas">Payments</li>
              </ul>
            </div>
            <div className="column">
              <h3 className="column-h1">RESOURCES</h3>
              <ul className="column-ul ">
                <li className="sadasdas">Free eBooks</li>
                <li className="sadasdas">Development Tutorial</li>
                <li className="sadasdas">How to - Blog</li>
                <li className="sadasdas">Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-p">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="payment-icons">
            <span>
              <Icon name="visa" />
            </span>
            <span>
              <Icon name="asd" />
            </span>
            <span>
              <Icon name="paypal" />
            </span>
            <span>
              <Icon name="pav" />
            </span>
            <span>
              <Icon name="pay" />
            </span>
            
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
