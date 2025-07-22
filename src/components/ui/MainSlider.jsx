
import {data} from "../../data/commentData";
import Icon from "../Icon";
import "./MainSlider.css";
import { useState } from "react";
data
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
              <div className={`card ${ index === 0 || index === 4 ? "side-card" : ""}`}>
                <Icon name={item.stars} />
                <div className="sadsadfasdasdas">
                  <h3>{item.name}</h3>
                  <span className="positionssss">
                    <Icon name={item.tik} />
                  </span>
                </div>
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
