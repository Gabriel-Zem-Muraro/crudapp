import Botao from "@/componentes/botao"
import CamposDeTexto from "@/componentes/camposDeTexto"
import { useState } from "react"

export default function FormularioAdd () {

  const [id, setId] = useState('')
  
  const aoSalvar = (eventoQueAcontecera: any) => {
    eventoQueAcontecera.preventDefault()
    console.log('Foi submetido', id);
  }

  return(
      <form onSubmit={aoSalvar} className="flex flex-col justify-center items-center bg-zinc-800 p-3 rounded-4xl h-full w-full outline outline-offset-2 outline-stone-500">
        <CamposDeTexto label="Id" placeholder="Digite o Id do usuário" valor={id} aoAlterado={(valor: string) => setId(valor)} obrigatorio={true} />
        
        <Botao name="Consultar" value="consultaId"/>
      </form>
  )
}