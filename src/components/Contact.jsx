import React, { useState } from 'react'
import {useFormik} from 'formik'
import axios from "axios"
export default function Contact(props) {
    
   async function sendData(values){
        const data= await axios.post("http://upskilling-egypt.com:3000/contact",values)
        setSuccessMsg(data.data.message)
        .catch(function(error){
            console.log(error)
            

        })
    }
    const[successMsg,setSuccessMsg] =useState(null) 
    const formikObj= useFormik({
        initialValues:{
            name:"",
            email:"",
            phone: ""
        },
        onSubmit:sendData,
        validate:function(values){
            const errors={}
            if (values.name.length<4||values.name.length>20) {
                errors.name='name must have 4 to 12 characters'
            }
            if (!values.email.includes('@')||!values.email.includes('.com')) {
                errors.email='invalid email'
            }
            if (!values.phone.match(/^01[0125][0-9]{8}$/)) { errors.phone='invalid phone' }
            return errors;
    
        }
    })
    

    return (
        <>
            <div className="contact">
            <h1 style={{color:`#C98A40`,fontSize:`100px`,fontWeight:`800`,padding:`30px`}} className='text-center pt-3'>CONTACT US</h1>
             <div className='w-50 m-auto row'>
                <div className="col-md-6">
                    <form action="" className='p-4 bg-white' onSubmit={formikObj.handleSubmit}>
                        <input onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.name} type="text" name="name" id="" className='w-100 my-1 py-1 px-3 rounded-5 border-0' placeholder='full name' style={{background:`#FFD39F`}} />
                        {formikObj.errors.name&&formikObj.touched.name? <div className="alert alert-danger">{formikObj.errors.name}</div>:""}
                        <input onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.email} type="email" name="email" id="" className='w-100 my-1 py-1 px-3 rounded-5 border-0' placeholder='Email' style={{background:`#FFD39F`}} />
                        {formikObj.errors.email&&formikObj.touched.email? <div className="alert alert-danger">{formikObj.errors.email}</div>:""}
                        <input onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.phone} type="tel" name="phone" id="" className='w-100 my-1 py-1 px-3 rounded-5 border-0' placeholder='Phone Number' style={{background:`#FFD39F`}} />
                        {formikObj.errors.phone&&formikObj.touched.phone? <div className="alert alert-danger">{formikObj.errors.phone}</div>:""}
                        <div className='text-center'>
                        <button disabled={!formikObj.isValid||!formikObj.dirty} type="submit" className='btn fw-bolder rounded-5 px-5 mt-3 mb-3'  style={{border: `2px solid #C98A40`,fontSize:`12px`}}>SEND</button>
                        </div>
                        {successMsg? <div >Email sent successfully</div>:""}
                        
                    </form>
                </div>
                <div className="col-md-6 ">
                    <div className="container pt-5">
                        <span><i class="fa-solid fa-envelope pe-3" style={{color:`#C98A40`}}></i></span>
                        <span style={{color:`#333`}}>Upskilling.eg1</span>
                        <span style={{color:`#333`,textDecorationLine:`underline`}}>@gmail.com</span>
                    </div>
                    <div className="container text-start pt-3" >
                        <span><i class="fa-solid fa-phone pe-3" style={{color:`#C98A40`}}></i></span>
                        <span style={{color:`#333`}}>01149794555</span>
                    </div>
                </div>
             </div>
            </div>
        </>
    )
}
