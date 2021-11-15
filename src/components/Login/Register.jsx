import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import logo from "../../assets/logo2.png"
import Swal from 'sweetalert2'

export default function Register(){

  useEffect(()=>document.title = 'Registro')

  let users = []
  const history = useHistory();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmation, setConfirmation] = useState("");

  if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'))
  }

  function register(e){ 
    e.preventDefault();
    if (name != "" && email != ""  && password != "" && confirmation != "") {
      let idUser = users.findIndex(user => user.email === email.toLowerCase());
      if(idUser == -1){
        if(password === confirmation){
          let userObj = {user:name, email:email, password:password, state:false}
          users.push(userObj)
          localStorage.setItem('users', JSON.stringify(users));
          Swal.fire('','Usuario registrado','success'); 
          history.push("/login");
          window.location.reload()
        }else{
          Swal.fire('','Las contraseñas no coinciden','error')
        }
      }else{
        Swal.fire('','Ya existe un usuario registrado con el correo electrónico','error')
      }
    }
  }
  
  return(
    <>
    <img src={logo} alt="img-logo" height="150" width="150" />
    <p className="title-register"> Manhattan Crush </p>
    <form className="row g-3" style={{width:'70%'}} onSubmit={(e)=>register(e)}>
      <div className="col-12">
        <input 
          type="text" 
          id="inputName" 
          minlength="5"
          maxlength="40"
          autoComplete="off"
          pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
          className="form-control" 
          placeholder="Nombre completo"
          onChange={(e)=>setName(e.target.value)}
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
      <div className="col-12">
        <input 
          type="password" 
          id="inputPassword"
          className="form-control" 
          placeholder="Confirmación"
          onChange={(e)=>setConfirmation(e.target.value)}
          required
        />
      </div>
      <div className="col-12 text-center py-2">
        <button type="submit" className="btn btn-login rounded-pill">
          Registrarse
        </button>
      </div>
      <div className="col-12 questions text-center">
        <p>
          ¿Tienes una cuenta? <a href="/login" style={{color:'#db8f00'}}>Inicia sesión</a>
        </p> 
      </div>
    </form>
    </>
  )
}