import Icon from "../Icon";
import "./MainSlider.css";
import { useState } from "react";

const data = [
  {
    name: "Tom R.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations",
    stars: "stars2-1",
    tik:"tik"
  },
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    stars: "stars2-1",
    tik:"tik"
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
    stars: "stars2-1",
    tik:"tik"
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
    stars: "stars2-1",
    tik:"tik"
  },
  {
    name: "Moon Y.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
    stars: "stars2-1",
    tik:"tik"
  },
];

function MainSlider() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % data.length);

  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + data.length) % data.length);

  };

  const getVisibleItems = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push(data[(startIndex + i) % data.length]);
    }
    return result;
  };

  return (
    <>
      <div className="sliderkol">
        <div className="sliderkol-slid-center">
          <ul className="sliderkol-ul">
            <li>
              <strong className="strogessss">OUR HAPPY CUSTOMERS</strong>
            </li>
            <li className="liasdsafhbasihfb">
              <button className="slider-btn " onClick={handlePrev}>
                <Icon name="chap" />
              </button>
              <button className="slider-btn " onClick={handleNext}>
                <Icon name="rast" />
              </button>
            </li>
          </ul>

          <div className="slider">
            {getVisibleItems().map((item, index) => (
              <div
                className={`card ${
                  index === 0 || index === 4 ? "side-card" : ""
                }`}
                key={index}
              >
                                      <Icon name={item.stars} />
                                      <div className="sadsadfasdasdas">
                <h3>{item.name}</h3> <span className="positionssss">
                    <Icon name={item.tik}/>
                </span></div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );
}

export default MainSlider;
