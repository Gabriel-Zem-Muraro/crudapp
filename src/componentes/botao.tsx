export default function Botao(props: any) {
  return (
    <div
      className="w-[100%] sm:w-[80%] h-12 outline-2 outline-offset-2 outline-stone-500 bg-zinc-700 text-stone-300 justify-center items-center
    hover:text-red-800 mx-30 my-[2%] flex rounded-xl ">
      <button onClick={props.onClick}>{props.name}</button>
    </div>
  );
}
