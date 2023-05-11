import { useState } from 'react'
import Banner from './components/Banner'
import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 

     <Navbar/>
     
     <main>
      <Banner/>
     <div className='contenedorListadoSale'>
      <h2>Autos de la semana:</h2>
     </div>
     </main>
     
     <Footer/>
     </div>
      
  )
}

export default App
