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
     
     </main>
     </div>
      
  )
}

export default App
