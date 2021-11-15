import React, { useState } from "react";
import Swal from 'sweetalert2'

export default function Form(){

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [tel, setTel] = useState("");
  let [number, setNumber] = useState(1);
  let [date, setDate] = useState("");
  let [time, setTime] = useState("");
  let [message, setMessage] = useState("");

  function reservation(e) {
    e.preventDefault();
    let reservations = []
    if (localStorage.getItem('reservations')) {
      reservations = JSON.parse(localStorage.getItem('reservations'))
    }
    let reservationrObj = {
      user:name, email:email, tel:tel, number:number, date:date, time:time, message:message
    }
    reservations.push(reservationrObj)
    localStorage.setItem('reservations', JSON.stringify(reservations));
    document.getElementById('form-reservarion').reset();
    Swal.fire('Reservación exitosa!', 'La confirmación se enviará a su correo electrónico','success')
  }


  return(
    <form className="row g-3" id="form-reservarion" style={{width:'60%'}} onSubmit={(e)=>reservation(e)}>
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
          minlength="5"
          maxlength="40"
          autoComplete="off"
          className="form-control" 
          placeholder="Correo electrónico"
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="tel" 
          id="inputTel" 
          minlength="7"
          maxlength="10"
          autoComplete="off"
          className="form-control" 
          placeholder="Número de teléfono" 
          onChange={(e)=>setTel(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="number" 
          id="inputNumber" 
          min="1"
          max="6"
          autoComplete="off"
          className="form-control" 
          placeholder="Número de personas"
          onChange={(e)=>setNumber(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="date" 
          id="inputDate" 
          className="form-control" 
          onChange={(e)=>setDate(e.target.value)}
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="time" 
          id="inputTime" 
          className="form-control" 
          onChange={(e)=>setTime(e.target.value)}
          required
        />
      </div>
      <div className="col-12">
        <textarea 
          rows="5" 
          id="message" 
          minlength="5"
          maxlength="200"
          className="form-control" 
          placeholder="Solicitud especial"
          onChange={(e)=>setMessage(e.target.value)}>
        </textarea>
      </div>
      <div className="col-12 text-center py-2 pb-5">
        <button className="btn btn-reservation rounded-pill">
          Reservar mesa
        </button>
      </div>
    </form>
  )
}