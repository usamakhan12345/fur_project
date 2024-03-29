import React from 'react'
import styles from  './style.module.scss'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import Link from 'next/link'
const Footer = () => {
  return (
    <>
    <div className={styles.footerHead}>
        <h3>GET IN TOUCH</h3>
        <ul>
            <li><Link href="https://www.facebook.com/profile.php?id=100063954280796&mibextid=JRoKGi" target='_blank'><FaFacebook className={styles.Icons}/></Link></li>
            <li><Link href={'www.facebook.com'}><FaTwitter className={styles.Icons}/></Link></li>
            <li><Link href="https://wa.me/03120129875" target='_blank'><PiWhatsappLogoFill  className={styles.Icons}/></Link></li>
            <li><Link href="mailto:shehzadausamakhan@gmail.com"><CgMail  className={styles.Icons}/></Link></li>
        </ul>
        <h5>2024 All Rights Reserved </h5>
    </div>
    </>
  )
}

export default Footer