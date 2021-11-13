import React from "react";

export default function Form(){
  return(
    <form className="row g-3" style={{width:'60%'}}>
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
          minlength="5"
          maxlength="40"
          autoComplete="off"
          className="form-control" 
          placeholder="Correo electrónico"
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="tel" 
          id="inputTel" 
          autoComplete="off"
          className="form-control" 
          placeholder="Número de teléfono" 
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="number" 
          id="inputNumPer" 
          autoComplete="off"
          className="form-control" 
          placeholder="Número de personas" 
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="date" 
          id="inputDate" 
          className="form-control" 
          required
        />
      </div>
      <div className="col-md-6">
        <input 
          type="time" 
          id="inputTime" 
          className="form-control" 
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
          placeholder="Solicitud especial">
        </textarea>
      </div>
      <div className="col-12 text-center py-2 pb-5">
        <button type="submit" className="btn btn-reservation rounded-pill">
          Reservar mesa
        </button>
      </div>
    </form>
  )
}