import Image from "next/image";

const service = [
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Ferias-Congresos/Nuestros-Servicios-Ferias-Congresos-Aljomar.jpg?raw=true",
    name: "Aljomar",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Ferias-Congresos/Nuestros-Servicios-Ferias-Congresos-Campofrio.jpg?raw=true",
    name: "Campofrio",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Ferias-Congresos/Nuestros-Servicios-Ferias-Congresos-Coren.jpg?raw=true",
    name: "Coren",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Ferias-Congresos/Nuestros-Servicios-Ferias-Congresos-Dulcesol.jpg?raw=true",
    name: "Dulcesol",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Ferias-Congresos/Nuestros-Servicios-Ferias-Congresos-ElPozo-Equipo.png?raw=true",
    name: "ElPozo",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Ferias-Congresos/Nuestros-Servicios-Ferias-Congresos-ElPozo-MasEquipo.png?raw=true",
    name: "ElPozo",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Ferias-Congresos/Nuestros-Servicios-Ferias-Congresos-ElPozo-Portada.png?raw=true",
    name: "ElPozo",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Ferias-Congresos/Nuestros-Servicios-Ferias-Congresos-Expocida.jpg?raw=true",
    name: "Expocida",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Ferias-Congresos/Nuestros-Servicios-Ferias-Congresos-HarinaPan.png?raw=true",
    name: "HarinaPan",
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
              width={1080}
              height={920}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
