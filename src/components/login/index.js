import React, { useState } from 'react'
import LoginPage from './login'
import loginImg from "../../assets/image/loginImg.jpg"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';import './style.css';
import RegisterPage from './registration';
import { useSpring, animated, config} from 'react-spring'


function LoginRoot() {
  const [loginPageActive, setLoginPageActive] = useState(true);
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 },reset: true, config: config.molasses,})
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'95vh'}}>
    <div className="row container shadow ps-0">
        <div className="col-md-4 imageSection ps-0">
            <img className='img-fluid w-100' style={{height:'500px'}} src={loginImg} alt=""/>
        </div>
        <animated.div style={props} className="col-md-8 mb-5 row contentSection">
            {loginPageActive ? 
          <p className='mt-3 m-0 p-0'> <span>Login</span> <span style={{color:'lightgray'}}>/ Sign up</span></p>
          :
          <p className='mt-3 m-0 p-0'> <span>Sign up</span> <span style={{color:'lightgray'}}>/ Login</span></p>  
          }
            {loginPageActive ? 
            <>
              <div className="col-md-6 border-end">
             <LoginPage />
            </div>
            <div className="col-md-6">
             <h6 style={{color:'gray'}}>Don't have an account? You can...</h6>
             <div className='mx-3 h-75 d-flex justify-content-center align-items-center'>
                <button className='btnDesign2' onClick={() => setLoginPageActive(!loginPageActive)}>Sign up <TrendingFlatIcon/> </button> 
              </div>
            </div>
            </>
            :
            <>
             
            <div className="col-md-6 border-end">
             <h6 style={{color:'gray'}}>Already have an account? You can...</h6>
             <div className='mx-3 h-75 d-flex justify-content-center align-items-center'>
                <button className='btnDesign2' onClick={() => setLoginPageActive(!loginPageActive)}>Login<TrendingFlatIcon/> </button> 
              </div>
            </div>
            <div className="col-md-6">
             <RegisterPage />
            </div>
            </>
          }
        </animated.div>
    </div>
    </div>
   
    </>
  )
}
export default LoginRoot
