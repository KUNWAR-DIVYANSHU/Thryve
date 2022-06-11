/**
 * path = "/" or "/home/feature1"
 */
import styles from './feature.module.css'
import arrow from '../../../image/greenArrow.svg'
import { useNavigate } from 'react-router-dom'

export default function FeaturePage1(){
    let navigate = useNavigate()
    return <div className={styles.FeaturePage}>
       <div className={styles.verMessage}> New features comes to Thryve Version 1.0 Beta
                <img className={styles.verImage} src={arrow} alt="arrow"/>
                </div>

                <div className={styles.headTitle}>Next Generation Software platform for education</div>

                <div className={styles.headDescription}>Thryve is an educational software 
                    powered by community of open source software developers and educators.</div>
                <div>
                    <span className={styles.loginStyle2} 
                     onClick={
                        ()=>{
                                navigate('/authenticate/login')
                        }}>Login</span>
                    <span className={styles.registerStyle2} >Register</span>
                </div>
    </div>
}
 