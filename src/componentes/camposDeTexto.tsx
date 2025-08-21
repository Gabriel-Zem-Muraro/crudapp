import { log } from "console";
import { useState } from "react";

export default function CamposDeTexto (props: any) {

  const aoDigitado = (evento: any) => {
    props.aoAlterado(evento.target.value) 
  }


  return(
    <div className="text-white">
      <div className="flex flex-col gap-2 m-2">
        <label>{props.label}</label>

        <input 
        className="outline outline-offset-2 outline-stone-500"
        type="text" 
        name={props.name}
        placeholder={props.placeholder}
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        />
      </div>
    </div>
  )
}