import React from 'react'
import styles from './style.module.scss'
import { MdOutlineSupportAgent } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { BiSolidMessageX } from "react-icons/bi";
import { PiWhatsappLogoFill } from "react-icons/pi";

const Benefits = () => {
  return (
    <>
    <h1 className={styles.benefitsHeading}>Benefits</h1>
    <div className={styles.benfitswraper}>
        <div className={styles.benefitsHead}>
        <MdOutlineSupportAgent className={styles.benefitIcons}/>
        <h2>Customer Support</h2>
        <p>If it’s furniture, we are here to serve you in the best manner possible. Contact Apnafurniture.pk anytime: 03318999222</p>
        </div>    
        <div className={styles.benefitsHead}>
        <HiOutlineDotsHorizontal className={styles.benefitIcons}/>
        <h2>Wide Range</h2>
        <p>We strive to provide something for everyone on Apnafurniture.pk with regular uploads of new furniture products. Visit us regularly!</p>
        </div>    
        <div className={styles.benefitsHead}>
        <BiSolidMessageX className={styles.benefitIcons}/>
        <h2>No Mis-commitments</h2>
        <p>We deliver what we display. And we display what we can deliver. “No mis- commitments” is something that everyone understands at Apnafurniture.pk!</p>
        </div>    
   {/* <h1><PiWhatsappLogoFill className={styles.whatsabIcon}/></h1> */}
   </div>

    </>
    )
}

export default Benefits