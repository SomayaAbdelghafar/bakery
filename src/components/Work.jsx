import React from "react";
import bgImg from "../imgs/bg1.png";
import card1 from "../imgs/card1.png";
import card2 from "../imgs/card2.png";
import card3 from "../imgs/card3.png";
import card4 from "../imgs/card4.png";

export default function Work(props) {
  return (
    <>
      <div
        className="work pt-0"
        style={{ backgroundImage: `url(${bgImg})`, height: `100vh` }}
      >
        <div className=" h-100 ms-auto row pt-0 mt-0" style={{ width: `85%` }}>
          <div
            className="col-md-3  mt-5 pt-5 pe-4 text-end workLeftPart"
            style={{ color: `#C98A40` }}
          >
            <p className="fw-bolder">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
          </div>
          <div
            className="col-md-9  workRightPart "
            style={{ background: `#C98A40` }}
          >
            <div className="heading text-center text-white">
              <h1
                style={{
                  fontSize: `100px`,
                  fontWeight: `800`,
                  lineHeight: `138.24px`,
                }}
              >
                HOW WE
              </h1>
              <h1
                style={{
                  fontSize: `100px`,
                  fontWeight: `800`,
                  lineHeight: `138.24px`,
                }}
              >
                WORK
              </h1>
            </div>

            <div className="cardContainer  row">
              <div className="col-lg-3  px-2 text-center py-1">
                <img src={card1} alt=""  />
              </div>
              <div className="col-lg-3  px-2 text-center py-1">
                <img src={card2} alt=""  />
              </div>
              <div className="col-lg-3  px-2 text-center py-1">
                <img src={card3} alt=""  />
              </div>
              <div className="col-lg-3  px-2 text-center py-1">
                <img src={card4} alt=""  />
              </div>
            </div>
            <div  style={{position:`absolute`,bottom:`5%`}}>
              <button
                className="  m-auto"
                style={{
                  width: `150px`,
                  height: `40px`,
                  background: `#FDBA10`,
                  borderRadius: `30px`,
                  color: `white`,
                  border: `none`,
                  fontWeight: `bold`,
                }}
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
