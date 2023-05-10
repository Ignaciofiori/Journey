import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
     <Navbar/>
     <main>
     <div className='banner'>
<h1>Consigue el auto de tu sueños!</h1>
     </div>
     </main>
     </div>
      
  )
}

export default App
