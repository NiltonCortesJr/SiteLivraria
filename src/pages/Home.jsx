import React from "react"
import Header from '../components/Header/Header'
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className="home">
      <Header />
        <Cards />      
      <Footer/>
    </div>
  )
}

export default Home