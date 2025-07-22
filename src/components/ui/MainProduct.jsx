import Icon from "../Icon";
import { Link } from "react-router-dom";
import { updatedProducts, updatedProducts2 } from "./productTry";

function MainProduct() {
  return (
    <>
      <div className="product">
        <div className="product-center">
          <div className=" product-1 peoduct-1zir">
            <strong className="product-1-p">NEW ARRIVALS</strong>
            <div className="product-1-dkol">
              {updatedProducts.map((item) => (
                <Link
                  to={`/product/${item.id}`}
                  className="product-1-dps"
                  key={item.id}
                >
                  <img src={item.img} alt="" className="product-1-dps-imgs" />
                  <p className="product-1-dps-bold">{item.name}</p>
                  <div className="product-1-dps-divnazar">
                    <Icon name={item.star} />
                    <span className="product-1-dps-divnazar-span">
                      {item.com}
                      <span className="shadowspan">{item.comE}</span>
                    </span>
                  </div>
                  <div className="product-1-price">
                    <span className="bolddddd">{item.price}</span>
                    {item.isSpecial && (
                      <s className="bolddddd shadowspan">{item.priceC}</s>
                    )}
                    {item.isSpecial && (
                      <span className="product-off">{item.off}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <div className="product-1-dbtn">
              <button className="product-1-dbtn-btn">View All</button>
            </div>
          </div>

          <div className=" product-1">
            <strong className="product-1-p">top selling</strong>
            <div className="product-1-dkol">
              {updatedProducts2.map((item) => (
                <Link
                  to={`/product/${item.id}`}
                  className="product-1-dps"
                  key={item.id}
                >
                  <img src={item.img} alt="" className="product-1-dps-imgs" />
                  <p className="product-1-dps-bold">{item.name}</p>
                  <div className="product-1-dps-divnazar">
                    <Icon name={item.star} />
                    <span className="product-1-dps-divnazar-span">
                      {item.com}
                      <span className="shadowspan">{item.comE}</span>
                    </span>
                  </div>
                  <div className="product-1-price">
                    <span className="bolddddd">{item.price}</span>
                    {item.isSpecial && (
                      <s className="bolddddd shadowspan">{item.priceC}</s>
                    )}
                    {item.isSpecial && (
                      <span className="product-off">{item.off}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <div className="product-1-dbtn">
              <a href="">
                <button className="product-1-dbtn-btn">View All</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="class">
        <div className="class-center">
          <div className="class-p">
            <strong className="">BROWSE BY DREES STYLE</strong>
          </div>
          <div className="class-dkol">
            <div className="class-dkol-dbp">
              <div className="class-dkol-dbLR bacimgBL baccc">
                <h1 className="classppppppp">Casual</h1>
              </div>
              <div className="class-dkol-dbRL bacimgBR baccc">
                <h1 className="classppppppp">Formal</h1>
              </div>
            </div>
            <div className="class-dkol-dbp">
              <div className="class-dkol-dbRL bacimgPL baccc">
                <h1 className="classppppppp">Party</h1>
              </div>
              <div className="class-dkol-dbLR bacimgPR baccc">
                <h1 className="classppppppp">Gym</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainProduct;
