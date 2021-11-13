import React, { useEffect } from "react";
import logo from "../../assets/logo2.png"

export default function Register(){
  useEffect(()=>document.title = 'Registro')
  return(
    <>
    <img src={logo} alt="img-logo" height="150" width="150" />
    <p className="title-register"> Manhattan Crush </p>
    <form className="row g-3" style={{width:'70%'}}>
      <div className="col-12">
        <input 
          type="text" 
          id="inputName" 
          minlength="5"
          maxlength="40"
          autoComplete="off"
          pattern="[a-zA-Z]+"
          className="form-control" 
          placeholder="Nombre completo"
          required
        />
      </div>
      <div className="col-12">
        <input 
          type="email" 
          id="inputEmail"
          autoComplete="off"
          className="form-control" 
          placeholder="Correo electrónico"
          required
        />
      </div>
      <div className="col-12">
        <input 
          type="password" 
          id="inputPassword"
          className="form-control" 
          placeholder="Contraseña"
          required
        />
      </div>
      <div className="col-12">
        <input 
          type="password" 
          id="inputPassword"
          className="form-control" 
          placeholder="Confirmación"
          required
        />
      </div>
      <div className="col-12 text-center py-2">
        <button type="submit" className="btn btn-login rounded-pill">
          Registrarse
        </button>
      </div>
      <div className="col-12 text-center">
        <p>
          ¿Tienes una cuenta? <a href="/login" style={{color:'#db8f00'}}>Inicia sesión</a>
        </p> 
      </div>
    </form>
    </>
  )
}