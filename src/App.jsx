import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
// import CardModelo from './components/CardModelo/CardModelo'
// import FormEditar from './components/FormEditar/FormEditar'
// import FormInserir from './components/FormInserir/FormInserir'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Cards />  
      {/* <CardModelo />   */}
      {/* <FormEditar /> */}
      {/* <FormInserir /> */}
      <Footer/>
    </div>
  )
}

export default App
