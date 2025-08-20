export default function ListaSuspensa (props: any) {
  return(
    <div className="text-white">
      <div className="flex flex-col gap-2 m-2">
        <label>{props.label}</label>
        <select value={props.value} className="w-full outline outline-offset-2 outline-stone-500">
          <option className="bg-zinc-800">Selecione uma opção</option>
          {props.opc.map((opcao: any, index: number) => (
            <option className="bg-zinc-800" key={index} value={opcao.value} onChange={props.onChange}>
              {opcao.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}