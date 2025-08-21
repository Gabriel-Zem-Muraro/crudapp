'use client' 
import { useState } from 'react'
import Botao from "../componentes/botao";
import FormularioAdd from "@/formularios/formularioAdd";
import FormularioConsulta from '@/formularios/formularioConsulta';
import FormularioDeletar from '@/formularios/formularioDeletar';
import FormularioAtualizaParcial from '@/formularios/formularioAtualizaParcial'
import FormularioAtualizaTotal from '@/formularios/formularioAtualizaTotal'
import { userService } from '@/services/userService';
export default function Home() {

/*CONSULTAR ID*/
  const [setMostrarFormularioConsultaEBotaoConsultaId, setMostrarFormularioConsultaId] = useState(false) //Mostra o formulario para digitar o ID
  const [dadosUsuario, setDadosUsuario] = useState(null) //Armazena os dados do usuário retornados pela api na variavel dadosUsuario
  const [erro, setErro] = useState('') //Armazena a mensagem de erro tratada na api se falhar

/*CRIAR*/
  const [mostrarFormularioEBotaoCria, setMostrarFormularioCria] = useState(false)

/*DELETAR*/
  const [mostrarFormularioEBotaoDeletar, setMostrarFormularioDeleta] = useState(false)

/*ATUALIZAR PARCIAL*/
  const [mostrarFormularioEBotaoAtualizaParcial, setMostrarFormularioAtualizaP] = useState(false)

/*ATUALIZAR TOTAL*/
  const [mostrarFormularioEBotaoAtualizaTotal, setMostrarFormularioAtualizaT] = useState(false)


/*MUDA O ESTADO DO FORMULARIO CONSULTAR ID*/ 
  const handleConsultaIdClick = () => {
    setMostrarFormularioConsultaId(true) //Faz abrir o formulario na tela
    setDadosUsuario(null) //Limpa os dados enviados pela api anteriormente
    setErro('')//Limpa a mensagem de erro também
  }
  const handleVoltaConsulta = () => {
    setMostrarFormularioConsultaId(false) 
  }

  /*FUNÇÃO PARA CONSULTAR USUÁRIO POR ID*/
const consultarUsuario = async (id: string) => { //Recebe o id como contexto
  setErro('') //Limpa os erros anteriores
  try {
    const usuario = await userService.getById(parseInt(id)) //Puxa a função getById da pasta userService 
    //Chama a api e aguarda a resposta na variavel dadosUsuarios por causa que foi chamada a funcao setDadosUsuarios
    setDadosUsuario(usuario)
    console.log('Usuário encontrado:', usuario)
  } catch (error: any) {
    console.error('Erro ao consultar usuário:', error)
    setErro(error.response?.data?.message || 'Erro ao consultar usuário')
    setDadosUsuario(null)
}
}

/*MUDA O ESTADO DO FORMULARIO CRIAR*/ 
  const handleCriarClick = () => {
    setMostrarFormularioCria(true) 
  }
  const handleVoltarCria = () => {
    setMostrarFormularioCria(false) 
  }
  
/*MUDA O ESTADO DO FORMULARIO CRIAR*/ 
  const handleDeletaClick = () => {
    setMostrarFormularioDeleta(true) 
  }
  const handleVoltaDeleta = () => {
    setMostrarFormularioDeleta(false) 
  }

/*MUDA O ESTADO DO FORMULARIO ATUALIZA PARCIAL*/ 
const handleAtualizaPClick = () => {
  setMostrarFormularioAtualizaP(true) 
}
const handleVoltaAtualizaP = () => {
  setMostrarFormularioAtualizaP(false) 
}

/*MUDA O ESTADO DO FORMULARIO ATUALIZA TOTAL*/ 
const handleAtualizaTClick = () => {
  setMostrarFormularioAtualizaT(true) 
}
const handleVoltaAtualizaT = () => {
  setMostrarFormularioAtualizaT(false) 
}

  return (
    <div className="justify-items-center">
      <main className="flex flex-col gap-[32px] row-start-2 justify-items-center sm:items-start px-10 py-10 outline outline-offset-2 outline-stone-500 my-8">
        <section className="flex items-center bg-zinc-800 p-3 rounded-4xl outline-2 outline-offset-2 outline-stone-500">
            <div className="flex flex-col items-center w-full outline-offset-2 outline-stone-500">
              <Botao name="Consultar" onClick={handleConsultaIdClick}/>
              <Botao name="Consultar todos"/>
              <Botao name="Criar" onClick={handleCriarClick}/>
              <Botao name="Deletar" onClick={handleDeletaClick}/>
              <Botao name="Atualizar parcial" onClick={handleAtualizaPClick}/>
              <Botao name="Atualizar total" onClick={handleAtualizaTClick}/>
            </div>
        </section>

        {/*MOSTRAR FORMULARIO PARA CONSULTAR ID*/}
        {setMostrarFormularioConsultaEBotaoConsultaId && <FormularioConsulta onConsultar={consultarUsuario} />}
        {/*MOSTRAR FORMULARIO PARA CRIAR*/}
        {mostrarFormularioEBotaoCria && <FormularioAdd/>}
        {/*MOSTRAR FORMULARIO PARA DELETAR*/}
        {mostrarFormularioEBotaoDeletar && <FormularioDeletar/>}
        {/*MOSTRAR FORMULARIO PARA ATUALIZAR PARCIAL*/}
        {mostrarFormularioEBotaoAtualizaParcial && <FormularioAtualizaParcial/>}
        {/*MOSTRAR FORMULARIO PARA ATUALIZAR TOTAL*/}
        {mostrarFormularioEBotaoAtualizaTotal && <FormularioAtualizaTotal/>}
          
          <div className="flex flex-col items-center w-full outline-offset-2 outline-stone-500">

            {/*ESCONDE FORMULARIO PARA CONSULTAR ID*/}
            {setMostrarFormularioConsultaEBotaoConsultaId && <Botao name="Voltar consulta" value='voltar' onClick={handleVoltaConsulta}/>}
            {/*ESCONDE FORMULARIO PARA CONSULTAR*/}
            {mostrarFormularioEBotaoCria && <Botao name="Voltar Criar" value='voltar' onClick={handleVoltarCria}/>}
            {/*ESCONDE FORMULARIO PARA DELETAR*/}
            {mostrarFormularioEBotaoDeletar && <Botao name="Voltar Deletar" value='voltar' onClick={handleVoltaDeleta}/>}
            {/*ESCONDE FORMULARIO PARA ATUALIZAR PARCIAL*/}
            {mostrarFormularioEBotaoAtualizaParcial && <Botao name="Voltar Atualizar Parcial" value='voltar' onClick={handleVoltaAtualizaP}/>}
            {/*ESCONDE FORMULARIO PARA ATUALIZAR TOTAL*/}
            {mostrarFormularioEBotaoAtualizaTotal && <Botao name="Voltar Atualizar Total" value='voltar' onClick={handleVoltaAtualizaT}/>}

          </div>
      </main>
    </div>
  );
}
