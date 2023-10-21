import React from "react";
import bgImg from "../imgs/bg1.png";
import logo from "../imgs/logo.png";
import text from "../imgs/text1.png";
import sandwich from "../imgs/sandwichLogo.png";
import star1 from "../imgs/Star1.png";
export default function Header(props) {
  return (
    <>
      <div className="header row pb-0 mb-0" style={{ backgroundImage: `url(${bgImg})`}}>
        <div
          className="col-md-8 leftSide"
          
        >
          <div style={{ background: `#C98A40` }}>
            <div className="textContainer">
              <img
                src={logo}
                style={{
                  height: `52px`,
                  width: `52px`,
                  display: `inline-block`,
                  marginBottom: `30px`,
                }}
              />
              <div
                style={{
                  color: `white`,
                  fontSize: `18px`,
                  fontWeight: `700`,
                  textTransform: `uppercase`,
                  wordWrap: `break-word`,
                  display: `inline-block`,
                }}
                className="ps-4 mt-3"
              >
                <p className="pb-0 mb-0">Peachy Pup </p>
                <p className="pb-0 mb-0">Bakery</p>
              </div>
            </div>
            <div className=" mt-5 pt-5 pb-2 textContainer ">
              <h1 style={{ color: `white`, fontWeight: `800` }}>
                TASTY PASTRIES
              </h1>
              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
            </div>
            <div className="textContainer pb-5">
              <button className="mb-5  me-auto"
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
                SEE MORE
              </button>
            </div>
           
          </div>
          <div className="row">
              <div className="col-md-6 ">
                <div className="text-end"><i className="fa-brands fa-vk p-1 fs-5" style={{ color: `#C98A40`,background:`white` }}></i></div>
                <div className="text-end"><i className="fa-brands fa-square-facebook p-1 fs-5" style={{ color: `#C98A40`,background:`white` }}></i></div>
                <div className="text-end"><i className="fa-brands fa-square-instagram p-1 fs-5" style={{ color: `#C98A40`,background:`white` }}></i></div>
                <div className="text-end"><i classN="fa-brands fa-square-twitter p-1 fs-5" style={{ color: `#C98A40`,background:`white` }}></i></div>
              </div>
              <div className="col-md-6 pt-5" style={{color:`white`,background: `#C98A40`}}>
                <span className="fw-bold ">TELEPHONE:</span><span> 01149794555</span>
              </div>

            </div>
        </div>
        <div className="col-md-4 layersContainer" >
          <div className="imgLayers ">
            <img className="logo1"
              src={sandwich}
              alt=""
              style={{
                position: `absolute`,
                width: `550px`,
                height: `300px`,
              }}
            />
            <img className="logo2"
              src={text}
              alt=""
              style={{
                position: `absolute`,
                
                width: `500px`,
                height: `270px`,
              }}
            />
            <img className="logo3"
              src={star1}
              alt=""
              style={{
                position: `absolute`,
                width: `170px`,
                height: `150px`,
              }}
            />
          </div>
        </div>
  
      </div>
    </>
  );
}
