import React from 'react'
import styles from "./style.module.scss"
import { GrServices } from "react-icons/gr";
import { MdRateReview } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";
const index = () => {
    return (
        <>
            <h1 className={styles.service}>SERVICES</h1> 
            <div className={styles.secWrapper}>
                <div className={styles.head}>
                    <div>
                        <GrServices className={styles.servicesIcon} />
                    </div>
                    <div>
                        <h3>SAFE SERVICES   </h3>
                        <p>In all maojor cities in Pakistan</p>
                        <p style={{fontWeight : 'bold' , marginBottom : 20}}>I have more than 20 years of experience</p>
                    </div>

                </div>
                <div className={styles.head}>
                    <div>
                        <MdRateReview className={styles.servicesIcon} />
                    </div>
                    <div>
                        <h3>CUSTOMER REVIEWS</h3>
                        <p>View all customer support</p>
                    </div>

                </div>
                <div className={styles.head}>
                    <div>
                        <FaClock className={styles.servicesIcon} />
                    </div>
                    <div>
                        <h3>CUSTOMER SUPPORT</h3>
                        <p>Call us any time <br /> 0300-2855019 <b>||</b>0312-0129875</p>
                    </div>

                </div>
                <div className={styles.head}>
                    <div>
                        <TbCurrencyDollar className={styles.servicesIcon} />
                    </div>
                    <div>
                        <h3>COMPETITIVE PRICES</h3>
                        <p>Quality with affordability ensured</p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default index