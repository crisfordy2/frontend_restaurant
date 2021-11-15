import React, { useEffect } from "react";
import "./reservation.css"
import Swal from 'sweetalert2'

export default function Reservations(){

  useEffect(()=>document.title = 'Reservaciones')

  let reservations = []
  if (localStorage.getItem('reservations')) {
    reservations = JSON.parse(localStorage.getItem('reservations'))
  }

  function deleteRe(e) {
    Swal.fire({
      text: `¿Desea eliminar la reserva de ${reservations[e].user}?`,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#db8f00',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        reservations.splice(e,1);
        localStorage.setItem('reservations', JSON.stringify(reservations));
        window.location.reload(false)
      }
    })
  }

  return(
    <div className="container-fluid pt-5">
      <div className="row title-reservation pt-5 vstack">
        <h1>Reservaciones</h1>
        <div className="sub"></div>
      </div>
      <div className="row p-5 g-4" >
        {
          reservations.length ?
            reservations.map((reservation, index)=>{
              return (
                <div className="col-sm-3">
                  <div className="card-reservations mb-3" style={{maxWidth:'18rem'}}>
                    <div className="card-header">
                      <h6 className="m-0">{reservation.user}</h6>
                      <i 
                        type="button"
                        title="Eliminar" 
                        className="fas fa-trash" 
                        style={{fontSize:'15px'}}
                        onClick={()=>deleteRe(index)}>
                      </i>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        <b>Email :</b> {reservation.email}
                      </p>
                      <p className="card-text">
                        <b>Fecha :</b> {reservation.date}
                      </p>
                      <p className="card-text">
                        <b>Teléfono :</b> {reservation.tel}
                      </p>
                      <p className="card-text">
                        <b>Hora :</b> {reservation.time}
                      </p>
                      <p className="card-text">
                        <b>Número de personas :</b> {reservation.number}
                      </p>
                      <p className="card-text">
                        <b>Solicitud especial :</b> {reservation.message}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          :
          <h4 style={{fontFamily:'Gadugi', height:'50vh'}} >No hay mesas reservadas</h4>
        }
      </div>
    </div>
  )
}