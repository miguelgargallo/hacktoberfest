import Image from "next/image";

const service = [
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Uniformes/Nuestros-Servicios-Uniformes-Elegantes.jpg?raw=true",
    name: "Uniformes-Elegantes",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Uniformes/Nuestros-Servicios-Uniformes-Espectaculares.jpg?raw=true",
    name: "Uniformes-Espectaculares",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Uniformes/Nuestros-Servicios-Uniformes-Profesionales.jpg?raw=true",
    name: "Uniformes-Profesionales",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Uniformes/Nuestros-Servicios-Uniformes-Vuelo.jpg?raw=true",
    name: "Uniformes-Vuelo",
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
              height={480}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
