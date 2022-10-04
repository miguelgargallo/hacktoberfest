import Image from "next/image";

const service = [
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Eventos-Imagen/Nuestros-Servicios-Eventos-Imagen-Biotop.png?raw=true",
    name: "Biotop",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Eventos-Imagen/Nuestros-Servicios-Eventos-Imagen-Aljomar.jpg?raw=true",
    name: "Aljomar",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Eventos-Imagen/Nuestros-Servicios-Eventos-Imagen-Biotop-Espectaculo.png?raw=true",
    name: "Biotop",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Eventos-Imagen/Nuestros-Servicios-Eventos-Imagen-F1.jpg?raw=true",
    name: "F1",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Eventos-Imagen/Nuestros-Servicios-Eventos-Imagen-Montibello.jpg?raw=true",
    name: "Montibello",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Eventos-Imagen/Nuestros-Servicios-Eventos-Imagen-Movisar.jpg?raw=true",
    name: "Movisar",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Eventos-Imagen/Nuestros-Servicios-Eventos-Imagen-Prime-Beauty.jpeg?raw=true",
    name: "Prime",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Eventos-Imagen/Nuestros-Servicios-Eventos-Imagen-Revlon.png?raw=true",
    name: "Revlon",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Eventos-Imagen/Nuestros-Servicios-Eventos-Imagen-Valencia.png?raw=true",
    name: "Valencia",
  },
];

export default function Tinder() {
  return (
    <div className="overflow-y-auto">
      <div className="px-8 py-8 grid grid-flow-col auto-cols-max gap-9">
        {service.map((service) => (
          <div key={service.name}>
            <Image
              className="object-cover shadow-lg rounded-lg object-top"
              src={service.Image}
              alt={service.name}
              width={750}
              height={420}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


/*
{
  Image:
    "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Eventos-Imagen/Nuestros-Servicios-Eventos-Imagen-PrimaveraSound.jpeg?raw=true",
  name: "PrimaveraSound",
},

*/