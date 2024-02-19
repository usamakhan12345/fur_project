'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.scss"
import Image from 'next/image'
import Image1 from "../../../assets/slider1.avif"
import Image2 from "../../../assets/slider2.webp"
import Image3 from "../../../assets/slider3.webp"
import Image4 from "../../../assets/slider4.avif"

const MySlider = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };
  return (
    <>
    {/* <Image src={Image1}/> */}
    <div className={styles.contianer}>
        <Slider {...settings}>
          <div>
            <Image style={{height : '100%' , width : '100%' }} src={Image1} alt='iamge1'/>
          </div>
          <div >
          <Image style={{height : '100%' , width : '100%' ,}} src={Image2}  alt='iamge1'/>


          </div>
          <div >
          <Image style={{height : '100%' , width : '100%' }} src={Image3}  alt='iamge1'/>


          </div>
          <div >
          <Image style={{height : '100%' , width : '100%' }} src={Image4} alt='iamge1' />


          </div>
        </Slider>
      </div>
    </>
  )
}

export default MySlider