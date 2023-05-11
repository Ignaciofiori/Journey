import React from "react"
import { Link } from "react-router-dom"

function Logo(){
    return(
        
<div className="logo">
        <Link to="/"> <img src="./imgs/journey-logo.jpeg" alt="logo" /> </Link>
      </div>
     
    )
}

export default Logo