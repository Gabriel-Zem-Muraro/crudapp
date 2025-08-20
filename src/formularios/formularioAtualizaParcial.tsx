import Botao from "@/componentes/botao"
import CamposDeTexto from "@/componentes/camposDeTexto"
import ListaSuspensa from "@/componentes/listaSuspensa"

export default function FormularioAtualizaParcial (props: any) {
  const items = [{value: 'ativo', text: 'Usuário ativo'},
                 {value: 'inativo', text: 'Usuário inativo'}]
                 
  return(
      <div className="flex flex-col justify-center items-center bg-zinc-800 p-3 rounded-4xl h-full w-full outline outline-offset-2 outline-stone-500">
        <CamposDeTexto label="Id" placeholder="Digite o id do usuario para atualizar"/>
        <CamposDeTexto label="Nome" placeholder="Digite seu nome"/>
        <CamposDeTexto label="Idade" placeholder="Digite sua idade"/>
        <CamposDeTexto label="E-mail" placeholder="Digite seu e-mail"/>
        <CamposDeTexto label="Senha" placeholder="Digite sua senha"/>
        <ListaSuspensa label="Está ativo?" opc={items}/>
        <Botao name="Atualizar" value="atualizar"/>
      </div>
  )
}