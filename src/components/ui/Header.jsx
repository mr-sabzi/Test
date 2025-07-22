
import "./Header.css";
import Icon from "../Icon";
import Header1 from "./Header1";

function Header() {
 

  return (
    <>
      <div id="kolheader">
        <Header1/>


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
                  Shop Now
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
                <div className="header-3-items-1-status-s-bord  ">
                  <div>
                  <h1 className="header-3-items-1-status-s-v   ">2,000+</h1>
                  <p className="header-3-items-1-status-s-de avalchin">
                    High-Quality Products
                  </p></div>
                </div>
                <div className="   sadsad ">
                  <div className="divvasat">
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
