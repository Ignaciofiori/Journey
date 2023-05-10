import { useState } from 'react'
import Banner from './components/Banner'
import './App.css'
import Navbar from "./components/Navbar"
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
     
     
     </div>
      
  )
}

export default App
