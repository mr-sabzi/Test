import "./Footer.css";
import Icon from "../Icon";
import { useState } from "react";
function Footer() {
  const Icon1 = [
    {id:1, svg:'Twiter', svg2:'Twiter2'},
    {id:2, svg:'Facebook', svg2:'Facebook2'},
    {id:3, svg:'Instagram', svg2:'Instagram2'},
    {id:4, svg:'Git', svg2:'Git2'},
  ]
  const [active, setActive] = useState(2)
  return (
    <>


      <footer className="footer">
        <div className="bala-section">
          <h2 className="bala-title">
            STAY UPTO DATE ABOUT
            <br /> OUR LATEST OFFERS
          </h2>
          <div className="bala-form">
            <div className="bala-form-inp">
              <span className="emailicon">
                <Icon name='email'/>
              </span>
            <input
              type="email"
              className=" sdgtesa"
              placeholder="Enter your email address"
            />
            </div>
            <button className="btn-zir-inpt">
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

            <div className="iconss">
            {Icon1.map((item)=>(
              <>
              <div className={`social-icons ${active == item.id ? 'active' : 'notactive'}`} onClick={() => setActive(item.id)}>
                <span className="iconbtn"  >
                  <Icon name={`${active ==item.id ? item.svg2 : item.svg}`}/>
                </span>
              </div>
              </>
            ))}</div>
            
          </div>

          <div className="footer-links">
            <div className="column">
              <h3 className="column-h1">COMPANY</h3>
              <ul className="column-ul">
                <li className="sadasdas"><a href="" className="li-a">About</a></li>
                <li className="sadasdas"><a href="" className="li-a">Features</a></li>
                <li className="sadasdas"><a href="" className="li-a">Works</a></li>
                <li className="sadasdas"><a href="" className="li-a">Career</a></li>
              </ul>
            </div>
            <div className="column">
              <h3 className="column-h1">HELP</h3>
              <ul className="column-ul">
                <li className="sadasdas"><a href="" className="li-a">Customer Support</a></li>
                <li className="sadasdas"><a href="" className="li-a">Delivery Details</a></li>
                <li className="sadasdas"><a href="" className="li-a">Terms & Conditions</a></li>
                <li className="sadasdas"><a href="" className="li-a">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="column">
              <h3 className="column-h1">FAQ</h3>
              <ul  className="column-ul">
                <li className="sadasdas"><a href="" className="li-a">Account</a></li>
                <li className="sadasdas"><a href="" className="li-a">Manage Deliveries</a></li>
                <li className="sadasdas"><a href="" className="li-a">Orders</a></li>
                <li className="sadasdas"><a href="" className="li-a">Payments</a></li>
              </ul>
            </div>
            <div className="column">
              <h3 className="column-h1">RESOURCES</h3>
              <ul className="column-ul ">
                <li className="sadasdas"><a href="" className="li-a">Free eBooks</a></li>
                <li className="sadasdas"><a href="" className="li-a">Development Tutorial</a></li>
                <li className="sadasdas"><a href="" className="li-a">How to - Blog</a></li>
                <li className="sadasdas"><a href="" className="li-a">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-p">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="payment-icons">
            <span className="iconbtn2">
              <Icon name="visa" />
            </span>
            <span className="iconbtn2">
              <Icon name="asd" />
            </span>
            <span className="iconbtn2">
              <Icon name="paypal" />
            </span>
            <span className="iconbtn2">
              <Icon name="pav" />
            </span>
            <span className="iconbtn2">
              <Icon name="pay" />
            </span>
            
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
