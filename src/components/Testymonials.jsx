import React from 'react'
import bgTest from "../imgs/bgTest.png";

export default function Testymonials(props) {
    

    return (
        <>
        <div className="testymonials" style={{ backgroundImage: `url(${bgTest})`}} >
          <h1 style={{color:`white`,fontSize:`100px`,fontWeight:`800`}} className='text-center pt-3'>TESTYMONIALS</h1>
           <div className=" w-50 m-auto row">
            <div className="col-md-6 p-2 ">
               <div className='bg-light rounded-4 px-3 py-2'>
                  <h5 className='' style={{color:`#C98A40`,fontSize:`16px`,fontWeight:`900`}}>Lorem, ipsum dolor.</h5>
                  <p style={{fontSize:`14px`,color:`#333`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident</p>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
               </div>

            </div>
            <div className="col-md-6 p-2 ">
               <div className='bg-light rounded-4 px-3 py-2'>
                  <h5 className='' style={{color:`#C98A40`,fontSize:`16px`,fontWeight:`900`}}>Lorem, ipsum dolor.</h5>
                  <p style={{fontSize:`14px`,color:`#333`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident </p>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
               </div>

            </div>
            <div className="col-md-6 p-2 ">
               <div className='bg-light rounded-4 px-3 py-2'>
                  <h5 className='' style={{color:`#C98A40`,fontSize:`16px`,fontWeight:`900`}}>Lorem, ipsum dolor.</h5>
                  <p style={{fontSize:`14px`,color:`#333`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident</p>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
               </div>

            </div>
            <div className="col-md-6 p-2 ">
               <div className='bg-light rounded-4 px-3 py-2'>
                  <h5 className='' style={{color:`#C98A40`,fontSize:`16px`,fontWeight:`900`}}>Lorem, ipsum dolor.</h5>
                  <p style={{fontSize:`14px`,color:`#333`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident</p>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
                  <span><i class="fa-solid fa-star p-1" style={{color:`#C98A40`}}></i></span>
               </div>

            </div>
           </div>
           <div className='text-center p-4'>
              <button
                className="m-auto"
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
            
        </>
    )
}
