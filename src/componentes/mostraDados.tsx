export default function MostraDados(props: any) {
  //Texto qye irá aparecer em cima ex: "id" label
  //Informação que a api irá retirnar value
  return (
    <div className="text-white">
      <div className="flex flex-col gap-2 m-2">
        <label className="text-sm text-gray-400">{props.label}</label>
        <div className="justify-items-center">
        <div
          className="w-[100%] sm:w-[100%] h-12 outline-2 outline-offset-2 outline-stone-500 bg-zinc-700 text-stone-300 justify-center items-center mx-30 my-[2%] flex rounded-xl "
        >
          {props.value}
        </div>
        </div>
      </div>
    </div>
  );
}
