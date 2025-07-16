import Icon from "../Icon";

function MainProduct() {
  const products = [
    {
      id: 1,
      name: "T-Shirt With Tape Details",
      stars: 30,
      img: "../assets/image/d40da9a3a7234235e66d6695d9d7098fc3289872.png",
      star: "stars-1",
      com: "4.5/",
      comE: "5",
      price: "$120",
      isSpecial: false,
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      stars: 24,
      img: "../assets/image/769b9d60ff941dde9bc0e54431b8d8fe3182f5e9.png",
      star: "stars-2",
      com: "3.5/",
      comE: "5",

      priceC: "$260",
      off: "-20%",
      isSpecial: true,
    },
    {
      id: 3,
      name: "Checkered Shirt",
      stars: 35,
      img: "../assets/image/bbf411c25fc84f87eeac1062fbe47f49c192d4f2.png",
      star: "stars-3",
      com: "4.5/",
      comE: "5",
      price: "$180",
      isSpecial: false,
    },
    {
      id: 4,
      name: "Sleeve Striped T-Shirt",
      stars: 35,
      img: "../assets/image/345742c27cc557f42cf1d489f7cc811856b90e9f.png",
      star: "stars-4",
      com: "4.5/",
      comE: "5",

      priceC: "$160",
      off: "-30%",
      isSpecial: true,
    },
  ];

  const products2 = [
    {
      id: 1,
      name: "Vertical Striped Shirt",
      stars: 30,
      img: "../assets/image/e01f5d3cd9029bd465a4c7158689ab1619693014.png",
      star: "stars2-1",
      com: "5.0/",
      comE: "5",

      priceC: "$232",
      off: "-20%",
      isSpecial: true,
    },
    {
      id: 2,
      name: "Courage Graphic T-Shirt",
      stars: 24,
      img: "../assets/image/57234b01d5fcac5632cf6823570ca2d1d53d7d73.png",
      star: "stars2-2",
      com: "4.0/",
      comE: "5",
      price: "$145",
      isSpecial: false,
    },
    {
      id: 3,
      name: "Loose Fit Bermuda Shorts",
      stars: 35,
      img: "../assets/image/89515d714a66d9ca1401101dee4cc689f8bb5ad2.png",
      star: "stars2-3",
      com: "3.0/",
      comE: "5",
      price: "$80",
      isSpecial: false,
    },
    {
      id: 4,
      name: "Faded Skinny Jeans",
      stars: 35,
      img: "../assets/image/f180c76808e2ff8a46be56aa933f031aed3abe75.png",
      star: "stars2-4",
      com: "4.5/ ",
      comE: "5",
      price: "$212",

      isSpecial: false,
    },
  ];
  const updatedProducts = products.map((item) => {
    if (item.off && item.priceC) {
      const offNumber = parseFloat(item.off.replace("-", "").replace("%", ""));
      const originalPrice = parseFloat(item.priceC.replace("$", ""));
      const discountedPrice = originalPrice * (1 - offNumber / 100);
      return {
        ...item,
        price: `$${discountedPrice.toFixed(0)}`,
      };
    }
    return item;
  });

  const updatedProducts2 = products2.map((item) => {
    if (item.off && item.priceC) {
      const offNumber = parseFloat(item.off.replace("-", "").replace("%", ""));
      const originalPrice = parseFloat(item.priceC.replace("$", ""));
      const discountedPrice = originalPrice * (1 - offNumber / 100);
      return {
        ...item,
        price: `$${discountedPrice.toFixed(0)}`,
      };
    }
    return item;
  });

  return (
    <>
      <div className="product">
        <div className="product-center">
          <div className=" product-1 peoduct-1zir">
            <strong className="product-1-p">NEW ARRIVALS</strong>
            <div className="product-1-dkol">
              {updatedProducts.map((item) => (
                <div className="product-1-dps" key={item.id}>
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
                </div>
              ))}
            </div>
            <div className="product-1-dbtn">
              <a href="">
                <button className="product-1-dbtn-btn">View All</button>
              </a>
            </div>
          </div>
          {/* <div className=" product-2"> 


          </div> */}

          <div className=" product-1">
            <strong className="product-1-p">top selling</strong>
            <div className="product-1-dkol">
              {updatedProducts2.map((item) => (
                <div className="product-1-dps" key={item.id}>
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
              <div className="class-dkol-dbLR bacimgBL">
                <h1 className="classppppppp">Casual</h1>
              </div>
              <div className="class-dkol-dbRL bacimgBR">
                <h1 className="classppppppp">Formal</h1>
              </div>
            </div>
            <div className="class-dkol-dbp">
              <div className="class-dkol-dbRL bacimgPL">
                <h1 className="classppppppp">Party</h1>
              </div>
              <div className="class-dkol-dbLR bacimgPR">
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
