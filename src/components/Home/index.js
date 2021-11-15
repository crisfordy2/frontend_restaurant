import React, { useEffect } from "react";
import "./style.css";
import Inicio from './../../assets/Inicio.jpeg';

export default function Home() {
    useEffect(()=>document.title = 'Inicio')
    return(
    <>
     <section>

       <div className="imagen">
                
         <img className="primera" src={Inicio}/> 
         <div className="nombre-restaurante">Manhattan Crush</div> 
         <div className="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
         </div>   
  
       </div>
     </section>      
    </>
    )
  
}

