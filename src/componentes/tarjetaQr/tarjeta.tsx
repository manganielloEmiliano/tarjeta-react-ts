import { FC } from "react";


interface TarjetaProps {
    alt:string;
    imagen:string;
    textoBold:string;
    texto:string;
}

export const Tarjeta: FC<TarjetaProps> = ({alt,imagen,textoBold,texto}) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      {/* Contenedor principal */}
      <div className="bg-white h-[499px] w-[320px] rounded-[20px] shadow-md">
        {/* Imagen */}
        <div className="h-[288px] w-[288px] rounded-[20px] flex justify-center m-4">
          <img
            className="rounded-[20px]"
            src={imagen}
            alt={alt}
          />
        </div>

        {/* Texto */}
        <div className="w-[288px] m-4">
          <p className="text-[1.5em] text-slate-900 font-bold text-center">
            {textoBold}
          </p>
          <p className="text-slate-500 mt-4 text-center">
            {texto}
          </p>
        </div>
      </div>
    </div>
  );
};
