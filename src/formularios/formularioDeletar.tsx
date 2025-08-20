import Botao from "@/componentes/botao"
import CamposDeTexto from "@/componentes/camposDeTexto"

export default function FormularioDeletar (props: any) {
  return(
      <div className="flex flex-col justify-center items-center bg-zinc-800 p-3 rounded-4xl h-full w-full outline outline-offset-2 outline-stone-500">
        <CamposDeTexto label="Id" placeholder="Digite o Id do usuário"/>
        <Botao name="Deletar" value="DeletarId"/>
      </div>
  )
}