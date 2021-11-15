import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import logo from "../../assets/logo2.png"
import Swal from 'sweetalert2'

export default function Login(){

  useEffect(()=>{document.title = 'Iniciar sesión'})

  const history = useHistory();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [newPassword, setNewPassword] = useState("")
  let [change, setChange] = useState(false)
  let users = []
  
  if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'))
  }

  function logueo(e){
    e.preventDefault();
    if (email != ""  && password != "") {
      let idUser = users.findIndex(user => user.email === email.toLowerCase());
      if(idUser != -1){
        if(users[idUser].password === password){
          
          users[idUser].state = true
          localStorage.setItem('users', JSON.stringify(users));
          history.push("/");
          window.location.reload()
        }else{
          Swal.fire('','Contraseña incorrecta','error')
        }
      }else{
        Swal.fire('','Usuario no registrado','error')
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
    <form id="form" className="row g-3" style={{width:'70%'}} onSubmit={(e)=>logueo(e)}>
      { change==false ?
      <>
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
        <button className="btn btn-login rounded-pill">
          Iniciar sesión
        </button>
      </div>
      <div className="col-12 questions text-center">
        <a href="#" onClick={()=>setChange(true)}>¿Has olvidado tu contraseña?</a> <br />
        <p>
          ¿No tienes cuenta? <a href="/registro" style={{color:'#db8f00'}}>Registrate</a>
        </p> 
      </div>
      </>
      :
      <>
      <div className="col-12">
        <input 
          type="email" 
          id="inputEmailPass"
          autoComplete="off"
          className="form-control" 
          placeholder="Correo electrónico"
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
      </div>
      <div className="col-12 newPass">
        <input 
          type="password" 
          id="inputPassCurrently"
          className="form-control" 
          placeholder="Contraseña actual"
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
      </div>
      <div className="col-12 newPass">
        <input 
          type="password" 
          id="inputNewPassword"
          className="form-control" 
          placeholder="Contraseña nueva"
          onChange={(e)=>setNewPassword(e.target.value)}
          required
        />
      </div>
      <div className="col-12 text-center py-2">
        <button className="btn btn-login rounded-pill">
          Cambiar contraseña
        </button>
      </div>
      <div className="col-12 questions text-center">
        <p>
          ¿Tienes una cuenta? <a href="/login" style={{color:'#db8f00'}} onClick={()=>setChange(false)}>
            Inicia sesión
          </a>
        </p> 
      </div>
      </>
      }
    </form>
    </>
  )
}