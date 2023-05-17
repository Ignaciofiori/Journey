import React from "react";


function Login (){
    return (
<div>
    <main>
    
    <section className="containerForm">
        <form action="/users/login" method="post" id="formularioLogin">
        <input type="text" name="emailUsuario" placeholder="Email"/>
        <input type="password" name="password" placeholder="Contraseña"/>
        <button type="submit">Login</button>
        </form>
        </section>
    </main>
      
</div>
    )
}

 export default Login