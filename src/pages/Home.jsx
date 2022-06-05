import React, {useState, useEffect} from "react"
import Header from '../components/Header/Header'
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'


function Home() {


  return (
    <div className="App">
      <Header />     
        <Cards />      
      <Footer/>
    </div>
  )
}

export default Home