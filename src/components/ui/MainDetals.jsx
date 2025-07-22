import { useState } from "react";
import Icon from "../Icon";
import "./MainDetals.css";
import { Link } from "react-router-dom";
import "./MainProduct.css";
function MainDitals({ product, product2 }) {
  const Icon1 = [
    { id: 1, svg: "brown2", svg2: "brown" },
    { id: 2, svg: "green2", svg2: "green" },
    { id: 3, svg: "pr2", svg2: "pr" },
  ];
  const akshas = [
    {
      id: 1,
      img: "../../assets/image/21d6bcec533545a2b1e10e90b8059bc1bc97eab5 (1).png",
    },
    {
      id: 2,
      img: "../../assets/image/51c45a78b417beff6f8fa6310534f3755fd23c5a.png",
    },
    {
      id: 3,
      img: "../../assets/image/52ce3b469d8d7ff6e33f95a574450e07218fc909.png",
    },
  ];
  const sizes = ["Small", "Medium", "Large", "X-Large"];
  const [active, setActive] = useState(1);
  const [activeSize, setActiveSize] = useState("Large");
  const [aks, setAks] = useState(akshas[0]);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    alert("Added to cart");
    window.location.reload();
  };
  return (
    <>
      <div className="kol">
        <div className="Maindetalskol">
                <div className="ParentBiger">
                  <ul className=" ParentBiger-ul">
                  <Link to={`/`} className="Linketohome" >
                      <li>  Home  <Icon name="biger" /> </li>
                  </Link>

                    <li> Shop <Icon name="biger" /> </li>

                    <li>Men <Icon name="biger" /></li>

                    <li>T-shirts </li>
                  </ul>
                </div>

                  {product && (
                    <>
                      <div className="detal">
                        <div className="aksha">
                          {akshas.map((item) => (
                            <div
                              key={item.id}
                              className="aksha-aks"
                              onClick={() => setAks(item)}
                              style={{
                                border:
                                  aks?.id === item.id ? "2px solid black" : "none",
                                cursor: "pointer",
                              }}
                            >
                              <img
                                src={item.img}
                                alt={`img-${item.id}`}
                                className="aksha-aks-img"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="aks">
                          <img
                            src="../../assets/image/image 1.png"
                            alt="image"
                            className="aks-img"
                          />
                        </div>
                        <div className="distalsha">
                          <div className="distalsha-mtn">
                            <strong className="strogessssa">{product.name}</strong>
                            <div className="distalsha-mtn-stars">
                              <div className="starhaaa">
                              <Icon name={product.star} />
                              </div>
                              <span className="lsadeipmfk">
                                {product.com}
                                <span className="shadowspan">{product.comE}</span>
                              </span>
                            </div>
                            <div className="distalsha-mtn-price">
                              <span className="bolddddd">{product.price}</span>
                              {product.isSpecial && product.priceC && (
                                <s className="bolddddd shadowspan">{product.priceC}</s>
                              )}
                              {product.isSpecial && product.off && (
                                <span className="product-off">{product.off}</span>
                              )}
                            </div>

                            <p className="distalsha-mtn-p">{product.des}</p>
                          </div>
                          <div className="distalsha-colors">
                            <p className="distalsha-mtn-p  asdsad">Select Colors</p>

                            <div className="distalsha-colors-colors">
                              {Icon1.map((product) => (
                                <>
                                  <div
                                    className={`social-icons ${
                                      active == product.id ? "active" : "notactive"
                                    }`}
                                    onClick={() => setActive(product.id)}
                                  >
                                    <span className="iconbtn">
                                      <Icon
                                        name={`${ active == product.id ? product.svg2 : product.svg }`}/>
                                    </span>
                                  </div>
                                </>
                              ))}
                            </div>
                          </div>
                          <div className="distalsha-size">
                            <p className="distalsha-mtn-p asdsad">Choose Size</p>
                            <div className="distalsha-size-size">
                              {sizes.map((size) => (
                                <button
                                  className="btnSize"
                                  onClick={() => setActiveSize(size)}
                                  style={{  backgroundColor: activeSize === size ? "black" : "#F0F0F0",
                                  color: activeSize === size ? "#F0F0F0" : "#00000099",
                                    }} >
                                  {size}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="distalsha-muchbtn">
                            <div className="distalsha-muchbtn-count">
                              <button
                                onClick={() => setCount((count) => count - 1)}
                                className="distalsha-muchbtn-count-btn"
                              >
                                <Icon name="M" />
                              </button>
                              <p className="distalsha-muchbtn-count-count">{count}</p>
                              <button
                                onClick={() => setCount((count) => count + 1)}
                                className="distalsha-muchbtn-count-btn"
                              >
                                <Icon name="B" />
                              </button>
                            </div>

                            <button
                              className="distalsha-muchbtn-btn"
                              onClick={handleClick}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {product2 && (
                    <>
                      <div className="detal">
                        <div className="aksha">
                          {akshas.map((item) => (
                            <div
                              key={item.id}
                              className="aksha-aks"
                              onClick={() => setAks(item)}
                              style={{
                                border:
                                  aks?.id === item.id ? "2px solid black" : "none",
                                cursor: "pointer",
                              }}
                            >
                              <img
                                src={item.img}
                                alt={`img-${item.id}`}
                                className="aksha-aks-img"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="aks">
                          <img
                            src="../../assets/image/image 1.png"
                            alt="ss  "
                            className="aks-img"
                          />
                        </div>
                        <div className="distalsha">
                          <div className="distalsha-mtn">
                            <strong className="strogessssa">{product2.name}</strong>
                            <div className="distalsha-mtn-stars">
                              <Icon name={product2.star} />
                              <span className="sakdlmjei">
                              {product2.com}<span className="shadowspan">{product2.comE}</span>
                              </span>
                            </div>
                            <div className="distalsha-mtn-price">
                              <span className="bolddddd">{product2.price}</span>
                              {product2.isSpecial && product2.priceC && (
                                <s className="bolddddd shadowspan">{product2.priceC}</s>
                              )}
                              {product2.isSpecial && product2.off && (
                                <span className="product-off">{product2.off}</span>
                              )}
                            </div>

                            <p className="distalsha-mtn-p">{product2.des}</p>
                          </div>
                          <div className="distalsha-colors">
                            <p className="distalsha-mtn-p  asdsad">Select Colors</p>

                            <div className="distalsha-colors-colors">
                              {Icon1.map((product2) => (
                                <>
                                  <div
                                    className={`social-icons ${
                                      active == product2.id ? "active" : "notactive"
                                    }`}
                                    onClick={() => setActive(product2.id)}
                                  >
                                    <span className="iconbtn">
                                      <Icon
                                        name={`${
                                          active == product2.id
                                            ? product2.svg2
                                            : product2.svg
                                        }`}
                                      />
                                    </span>
                                  </div>
                                </>
                              ))}
                            </div>
                          </div>
                          <div className="distalsha-size">
                            <p className="distalsha-mtn-p asdsad">Choose Size</p>
                            <div className="distalsha-size-size">
                              {sizes.map((size) => (
                                <button
                                  className="btnSize"
                                  onClick={() => setActiveSize(size)}
                                  style={{
                                    backgroundColor:
                                      activeSize === size ? "black" : "#F0F0F0",
                                    color:
                                      activeSize === size ? "#F0F0F0" : "#00000099",
                                  }}
                                >
                                  {size}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="distalsha-muchbtn">
                            <div className="distalsha-muchbtn-count">
                              <button
                                onClick={() => setCount((count) => count - 1)}
                                className="distalsha-muchbtn-count-btn"
                              >
                                <Icon name="M" />
                              </button>
                              <p className="distalsha-muchbtn-count-count">{count}</p>
                              <button
                                onClick={() => setCount((count) => count + 1)}
                                className="distalsha-muchbtn-count-btn"
                              >
                                <Icon name="B" />
                              </button>
                            </div>

                            <button
                              className="distalsha-muchbtn-btn"
                              onClick={handleClick}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
        </div>
      </div>
    </>
  );
}
export default MainDitals;
