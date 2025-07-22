import Icon from "../Icon";
import "./MainDetailProduct.css";
import { updatedProducts3 } from "./productTry";
function MainDetailProduct() {
  return (
    <>
      <div className="kolll">
          <div className="maindetalproduct">
              <strong className="product-1-p">You might also like</strong>
              <div className="maindetalproducthame">
                  {updatedProducts3.map((item) => (
                    <div className="product-1-dps1">
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
                              {item.isSpecial && item.priceC && (
                                <s className="bolddddd shadowspan">{item.priceC}</s>
                              )}
                              {item.isSpecial && item.off && (
                                <span className="product-off">{item.off}</span>
                              )}
                        </div>
                  </div>
                ))}
              </div>
          </div>
      </div>
    </>
  );
}
export default MainDetailProduct;
