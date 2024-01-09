import React from 'react'
import Header from "./Components/Header/index"
import Slider from "./Components/Slider/index"
import Services from './Components/Services'
import Category from './Components/Category/index'
import Benefits from "./Components/Benefits"
const Home = () => {
  return (
    <>
      <Header/>
      <Slider/>
      <Services/>
      <Category/>
      <Benefits/>
    </> 
  )
}

export default Home