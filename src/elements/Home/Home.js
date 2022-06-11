/**
 * path = "/" or "/home"
 */
import { Component } from 'react'

import styles from './home.module.css'
import arrow from '../../image/greenArrow.svg'

class Home extends Component{
    render() {

        return <div className={styles.bodyStyle}>

            {/*---------------------------------------- Navigation Bar --------------------------------*/}
            <div className={styles.navBarStyle}>
                <div><img src="/logo1.png" width="24px" alt="thryve logo"/></div>
                <div className={styles.navLinksParent}>
                    <span className={styles.navLinks} >Features</span>
                    
                    <span className={styles.navLinks} >Tutorial</span>
                    <span className={styles.navLinks} >Trainings</span>
                    <span className={styles.navLinks} >Developer Docs</span>
                </div>
                <div>
                    <span className={styles.loginStyle}>Login</span>
                    <span className={styles.registerStyle} >Register</span>
                </div>
            </div>

            {/*---------------------------------------- Main Content --------------------------------*/}
            <div className={styles.mainContentStyle}>
                <div className={styles.verMessage}> New features comes to Thryve Version 1.0 Beta
                <img className={styles.verImage} src={arrow} alt="arrow"/>
                </div>

                <div className={styles.headTitle}>Next Generation Software platform for empowering next generation education</div>

                <div className={styles.headDescription}>Thryve is an educational software for educator and learners 
                    powered by community of open source software developers and educators.</div>
                <div>
                    <span className={styles.loginStyle2}>Login</span>
                    <span className={styles.registerStyle2} >Register</span>
                </div>
            </div>

            {/*---------------------------------------- footer --------------------------------*/}
            <div className={styles.footerStyle}>
                <div>
                    <span className={styles.navLinks2} >Contact</span>
                    <span className={styles.navLinks2} >Privacy Policy</span>
                    <span className={styles.navLinks2} >About Us</span>
                </div>
                <span>copyright @ Thryve 2022</span>
                <span>Handicrafted With 😍 in India</span>
            </div>

        </div>

    }}

export default Home;
