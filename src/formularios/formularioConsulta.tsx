import Botao from "@/componentes/botao"
import CamposDeTexto from "@/componentes/camposDeTexto"
import { useState } from "react"

interface FormularioConsultaProps {
  onConsultar: (id: string) => void;
}

export default function FormularioConsulta ({ onConsultar }: FormularioConsultaProps) {

  const [id, setId] = useState('')
  
  const aoSalvar = (eventoQueAcontecera: any) => {
    eventoQueAcontecera.preventDefault()
    if(id.trim()) { // Verifica se o que foi digitado não está vazio
      console.log('O id ', id, ' foi enviado');
      onConsultar(id.trim()) //Envia o id sem espaços
    }
  }

  return(
      <form onSubmit={aoSalvar} className="flex flex-col justify-center items-center bg-zinc-800 p-3 rounded-4xl h-full w-full outline outline-offset-2 outline-stone-500">
        <CamposDeTexto label="Id" placeholder="Digite o Id do usuário" valor={id} aoAlterado={(valor: string) => setId(valor)} obrigatorio={true} />
        
        <Botao name="Consultar" value="consultaId"/>
      </form>
  )
}