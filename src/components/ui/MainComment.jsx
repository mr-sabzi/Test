import { dataComm } from "../../data/commentData";
import Icon from "../Icon";
import "./MainComment.css";

function MainComment() {
  return (
    <>
      <div className="MainComKOl">
        <div className="MainComKOlcenter">
          <div className="MainCom-silce">
            <div className="MainCom-silces">
              <p className="Mainslice-p">Product Details</p>
            </div>
            <div className="MainCom-silces  MainCom-silce-2">
              <p className="Mainslice-p2">Rating & Reviews</p>
            </div>
            <div className="MainCom-silces">
              <p className="Mainslice-p">FAQs</p>
            </div>
          </div>
          <div className="MainCom-title">
            <div className="MainCom-title-d1">
              <strong className="MainCom-title-d1-mtn">All Reviews</strong>
              <span className="shodowww">(451)</span>
            </div>
            <div className="MainCom-title-d2">
              <button className="MainCom-title-d2-tanzim">
                <Icon name="tanzim" />
              </button>
              <select name="" id="" className="MainCom-title-d2-select">
                <option value="">Latest</option>
              </select>
              <button className="MainCom-title-d2-btn">Write a Review</button>
            </div>
          </div>
          <div className="MainCom-comms">
            <div className="MainCom-comm-comm">
              {dataComm.map((item, index) => (
                <>
                  <div className="MainCom-comm-comm-hame">
                    <div className="mtncomm">
                      <Icon name={item.stars} />
                      <div className="commhmtn">
                        <h3>{item.name}</h3>
                        <span className="positionssss">
                          <Icon name={item.tik} />
                        </span>
                      </div>
                      <p style={{color:"#00000099"}}>"{item.text}"</p>
                      <p className="sldnnczmmmmsl">
                        {item.date}
                      </p>
                    </div>
                    <div className="tanzimatcomm">
                      <span
                        style={{ cursor: "pointer", height: "fit-content" }}
                      >
                        <Icon name="tanzimcomm" />
                      </span>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="btnnnnnnn">
              <a href="">
                <button className="product-1-dbtn-btn">
                  Load More Reviews
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainComment;
