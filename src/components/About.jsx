import React from 'react'
import about from "../imgs/about.png";



export default function About(props) {
    

    return (
        <>
        <div className="about row" style={{height:`100vh`}}>
            <div className="aboutLeftPart col-md-8 " style={{background:`#C98A40`}}>
                <div className="aboutContainer h-100 text-white ">
                    <div className='my-2 '>
                        <h1 style={{fontSize:`100px`,fontWeight:`800`}}>ABOUT</h1>
                        <h1 style={{fontSize:`100px`,fontWeight:`800`}}>US</h1>
                    </div>
                    <p className='pb-3 fw-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
            <div className="aboutRightPart col-md-4  bg-white">
                <img src={about} alt="" style={{width:`90%`,height:`80%`}} />
            </div>
        </div>
       
       

    
        </>
    )
}
