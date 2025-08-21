import Botao from "@/componentes/botao"
import CamposDeTexto from "@/componentes/camposDeTexto"
import ListaSuspensa from "@/componentes/listaSuspensa"
import { useState } from "react"

export default function FormularioAdd () {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [status, setStatus] = useState('')

  const aoSalvar = (eventoQueAcontecera: any) => {
    eventoQueAcontecera.preventDefault()
    console.log("nome: ", nome,' idade: ',idade,' email: ',email,' senha: ',senha,' status: ',status);
  }

  const items = [{value: 'ativo', text: 'Usuário ativo'},
                 {value: 'inativo', text: 'Usuário inativo'}]
                 
  return(
      <form onSubmit={aoSalvar} className="flex flex-col justify-center items-center bg-zinc-800 p-3 rounded-4xl h-full w-full outline outline-offset-2 outline-stone-500">
        <CamposDeTexto label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={(valor: string) => setNome(valor)} obrigatorio={true}/>
        <CamposDeTexto label="Idade" placeholder="Digite sua idade" valor={idade} aoAlterado={(valor: string) => setIdade(valor)} obrigatorio={true}/>
        <CamposDeTexto label="E-mail" placeholder="Digite seu e-mail" valor={email} aoAlterado={(valor: string) => setEmail(valor)} obrigatorio={true}/>
        <CamposDeTexto label="Senha" placeholder="Digite sua senha" valor={senha} aoAlterado={(valor: string) => setSenha(valor)} obrigatorio={true}/>
        <ListaSuspensa label="Está ativo?" opc={items} valor={status} aoAlterado={(valor: string) => setStatus(valor)} obrigatorio={true}/>
        <Botao name="Criar" value="cria"/>
      </form >
  )
}