import { useState } from "react";
import "./Header.css";
import Icon from "../Icon";

function Header() {
  const [neshoon, setneshoon] = useState("bede");

  return (
    <>
      <div id="kolheader">
        <div className={neshoon}>
          <div className="neshp">
            <p className="neshp-p">
              Sign up and get 20% off to your first order.{" "}
              <a href="" style={{ color: "white" }}>
                Sign Up Now
              </a>
            </p>
          </div>
          <div>
            <button onClick={() => setneshoon("nade")} className="btnzarb">
              <Icon name={"zarbdar"} />
            </button>
          </div>
        </div>
        <div id="header-2">
          <div id="header-2-items">
            <div id="header-2-items-d1">
              <h1>SHOP.CO</h1>
            </div>
            <div id="header-2-items-d2">
              <select name="" id="header-2-items-d2-select">
                <option value="">Shop</option>
              </select>
              <ul id="header-2-items-d2-ul">
                <a href="" className="li-a">
                  <li>On Sale</li>
                </a>
                <a href="" className="li-a">
                  <li>New Arrivals</li>
                </a>
                <a href="" className="li-a">
                  <li>Brands</li>
                </a>
              </ul>
            </div>
            <div id="header-2-items-d3">
              <button className="btnsearch btnzarb">
                <Icon name={"search"} />
              </button>
              <input
                type="text"
                placeholder="Search for products..."
                id="header-2-items-d3-inp"
              />
            </div>
            <div id="header-2-items-d4">
              <a href="" className="li-a">
                <Icon name={"SabadKharid"} />
              </a>
              <a href="" className="li-a">
                {" "}
                <Icon name={"Profile"} />
              </a>
            </div>
          </div>
        </div>

        <div id="header-3">
           <div className="header-3-items-1">
            <div className="header-3-items-1-center">
              <h1 className="header-3-items-1-h1">
                FIND CLOTHES <br /> THAT MATCHES YOUR STYLE
              </h1>

              <p className="header-3-items-1-p1">
                Browse through our diverse range of meticulously crafted
                garments, designed
                <br /> to bring out your individuality and cater to your sense
                of style.
              </p>

              <button className="header-3-items-1-btn">
                {" "}
                <a href="" className="btn-a">
                  Shop Now{" "}
                </a>{" "}
              </button>
            </div>
            <div className="header-3-items-1-status">
              <div className="header-3-items-1-status-center">
                <div className="header-3-items-1-status-s  avalchin">
                  <h1 className="header-3-items-1-status-s-v  ">200+</h1>
                  <p className="header-3-items-1-status-s-de">
                    International Brands
                  </p>
                </div>
                <div className="header-3-items-1-status-s-bord">
                  <h1 className="header-3-items-1-status-s-v  ">2,000+</h1>
                  <p className="header-3-items-1-status-s-de">
                    High-Quality Products
                  </p>
                </div>
                <div className="header-3-items-1-status-s ">
                  <div>
                    <h1 className="header-3-items-1-status-s-v ">30,000+</h1>
                    <p className=" header-3-items-1-status-s-de">
                      Happy Customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="header-3-items-2-L">
              <Icon name={"setareL"} />
            </div>
            <div className="header-3-items-2-R">
              <Icon name={"setareR"} />
            </div>

        </div>
        <div className="header4">
          <div >
            <Icon name="versace" />
          </div>
          <div >
            <Icon name="zara" />
          </div>
          <div >
            <Icon name="cucci" />
          </div>
          <div >
            <Icon name="prada" />
          </div>
          <div >
            <Icon name="calvin" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
