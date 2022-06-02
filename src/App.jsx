import './App.css'
import Cards from './components/Cards/Cards'
// import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'



function App() {
  

  return (
    <div className="App">
      <Header />
      <Cards />      
      {/* <Form /> */}
      <Footer/>
    </div>
  )
}

export default App
