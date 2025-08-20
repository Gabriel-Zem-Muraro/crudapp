export default function CamposDeTexto (props: any) {
  return(
    <div className="text-white">
      <div className="flex flex-col gap-2 m-2">
        <label>{props.label}</label>
        <input className="outline outline-offset-2 outline-stone-500"
        type="text" 
        placeholder={props.placeholder}
        value={props.valor}
        />
      </div>
    </div>
  )
}