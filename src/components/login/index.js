import React from 'react'
import LoginPage from './login'
import loginImg from "../../assets/image/loginImg.jpg"
import './style.css'

function LoginRoot() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'95vh'}}>
    <div className="row container shadow ps-0">
        <div className="col-md-4 imageSection ps-0">
            <img className='img-fluid w-100' src={loginImg} alt=""/>
        </div>
        <div className="col-md-8 contentSection "></div>
    </div>
    </div>
   
    </>
  )
}
export default LoginRoot
