import "./Header.css";
import Icon from "../Icon";
import { useState } from "react";

function Header1() {
  const [neshoon, setneshoon] = useState("bede");

  return (
    <>
      <div className={neshoon}>
        <div className="neshp">
          <p className="neshp-p">
            Sign up and get 20% off to your first order.
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
              <option value="">Home</option>
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
            <a href="" className="li-a sadsad">
              <Icon name={"SabadKharid"} />
            </a>
            <a href="" className="li-a sadsad">
              <Icon name={"Profile"} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header1;
