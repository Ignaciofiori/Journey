import Logo from "./Logo"
import SearchIndex from "./IndexSearch"
import Prueba from "./Prueba"
import ContentWrapper from "./ContentWraper"
import Footer from "./Footer"
import Login from "./Login"
import { Link,Switch,Route } from "react-router-dom"
{//ESTE ES EL BUGUER MENU (ICONO)
  /* <div class="burger-menu">
        <i class="fas fa-bars"></i>
        </div> */}


function Navbar() {
 
  
    return (
      <div>
    <header>
      <nav className="navbar" >
              <div className="contenedorLogoNavbar">
       <Logo />  
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/users/login">Login</Link></li>
            <li><a href="#">Registrarse</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
                </div>
       <SearchIndex/>
      </nav>
      </header>
    
   <Route exact path="/">
   <ContentWrapper/>
   </Route> 
    
   <Route path="/users/login">
   <Login/>
   </Route> 
   <Footer/>
   </div>
   
    )
  }
  

//   <header>
//   <div class="logo">
//     <a href="/"><img src="/images/logo.png" alt="logo"></a>
//   </div>
//   <nav>
//     <div class="navbar">
//       <div class="container nav-container">
//         <input class="checkbox" type="checkbox" name="" id="" />
//         <div class="hamburger-lines">
//           <span class="line line1"></span>
//           <span class="line line2"></span>
//           <span class="line line3"></span>
//         </div>  
//         <ul class="menu-items">
//           <li><a href="/">Inicio</a></li> 
//           <% if (locals.isLogged && locals.userLogged.id_categoria == 2)  { %>
//             <li><a href="/products/create">Ofrecer Clase</a></li> 
//             <li><a href="/users/profile">Hola <%=locals.userLogged.nombre %> !</a></li> 
//             <li><a href="http://localhost:3000/">Dashboard</a></li> 
//             <% } else if((locals.isLogged) && (locals.userLogged.id_categoria != 2)) {%>
//             <li><a href="/users/profile">Hola <%=locals.userLogged.nombre %> !</a></li> 
//           <% } else {%>
//               <li><a href="/users/login">Login</a></li>
//               <li><a href="/users/register">Register</a></li>
//               <% }%>
//         </ul>
//       </div>
//     </div>
//   </nav>
// </header>
  export default Navbar
  