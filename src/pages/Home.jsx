import React from "react"
import Header from '../components/Header/Header'
import HomeImg from "../components/HomeImg/HomeImg"
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className="home">
      <Header />
      <HomeImg />
      <Cards />      
      <Footer/>

    </div>
  )
}

export default Home