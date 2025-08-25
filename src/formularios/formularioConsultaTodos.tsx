import Botao from "@/componentes/botao";
import ListaSuspensa from "@/componentes/listaSuspensa";
import { useState } from "react";

interface FormularioConsultaTodos {
  onConsultarAtivos: (isActive: boolean) => void;
}

export default function FormularioConsultatodos({
  onConsultarAtivos,
}: FormularioConsultaTodos) {
  const [isActive, setIsActive] = useState("");

  const opc = [
    { value: "true", text: "Ativo" },
    { value: "false", text: "Inativo" },
  ];

  const aoSalvar = (eventoQueAcontecera: any) => {
    eventoQueAcontecera.preventDefault();
    if (isActive !== "") {
      onConsultarAtivos(isActive === "true");
    }
  };

  return (
    <form
      onSubmit={aoSalvar}
      className="flex flex-col justify-center items-center bg-zinc-800 p-3 rounded-4xl h-full w-full outline outline-offset-2 outline-stone-500"
    >
      <ListaSuspensa
        label="Status do Usuário"
        valor={isActive}
        aoAlterado={(valor: string) => setIsActive(valor)}
        opc={opc}
        obrigatorio={true}
      />

      <Botao name="Consultar" value="consultaStatus" />
    </form>
  );
}
