/**
 * path = "/authenticate"
 * if signed in then redirect to dashboard 
 */

import { Navigate, Outlet } from "react-router-dom";
import 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
import styles from './Authenticate.module.css'
import logo from '../../image/logo.png'

import { useState } from "react";

 export default function Authenticate(){
     const [isSignedIn, setIsSignedIn] = useState(false)

    return (
        (!isSignedIn) ?
        <div className={styles.loginMain}>
           <div className={styles.mainSection} > 
            {/* -------------------------------Left section --------------------------------------- */}
            <div className={[styles.sixty , styles.leftSection]}>   
                <div className={styles.logoContainer}> 
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.illustrationContainer}> 
                    <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_xrtz05z1.json"  background="transparent"  
                    speed="2"   loop  autoplay ></lottie-player>
                </div>
            </div>   

            {/* -------------------------------Right section --------------------------------------- */}
            <div className={[styles.rightSection , styles.fourty]}>
                <Outlet context={[isSignedIn , setIsSignedIn]}/>
            </div>
        </div>

            {/* ------------------------------- Footer --------------------------------------- */}
        <div className={styles.footer} > copyright @ Thryve 2022 </div>

        </div>
        : <Navigate to="/dashboard"/>
    )
}