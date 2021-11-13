import React, { useState, useEffect } from "react";
import logo from "../../assets/logo2.png"
import data from "../../data/data.json"

export default function Login(){

  useEffect(()=>document.title = 'Iniciar sesión')
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let users = []
  if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'))
  } else {
    localStorage.setItem('users', JSON.stringify(data.users)); 
    users = data.users
  }
  
  function logueo(){
    if (email != ""  && password != "") {
      let idUser = users.findIndex(user => user.email === email.toLowerCase());
      if(idUser != -1){
        if(users[idUser].password === password){
          alert('Ingresar'); 
        }else{
          alert('Contraseña incorrecta')
        }
      }else{
        alert('Usuario no registrado')
      }
    }
  }


  return(
    <>
    <img src={logo} alt="img-logo" height="150" width="150" />
    <p 
      className="title-login"> Restaurante <br /> 
      <span >
        Manhattan Crush
      </span> 
    </p>
    <form id="form" className="row g-3" style={{width:'70%'}} onSubmit={()=>logueo()}>
      <div className="col-12">
        <input 
          type="email" 
          id="inputEmail"
          autoComplete="off"
          className="form-control" 
          placeholder="Correo electrónico"
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
      </div>
      <div className="col-12">
        <input 
          type="password" 
          id="inputPassword"
          className="form-control" 
          placeholder="Contraseña"
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
      </div>
      <div className="col-12 text-center py-2">
        <button  className="btn btn-login rounded-pill">
          Iniciar sesión
        </button>
      </div>
      <div className="col-12 text-center">
        <a href="#">¿Has olvidado tu contraseña?</a> <br />
        <p>
          ¿No tienes cuenta? <a href="/registro" style={{color:'#db8f00'}}>Registrate</a>
        </p> 
      </div>
    </form>
    </>
  )
}