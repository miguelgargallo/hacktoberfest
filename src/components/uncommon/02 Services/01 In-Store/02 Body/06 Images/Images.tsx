import Image from "next/image";

const service = [
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-InStore/Nuestros-Servicios-InStore-ww.jpg?raw=true",
    name: "Aljomar",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-InStore/Nuestros-Servicios-InStore-tourist.jpg?raw=true",
    name: "tourist",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-InStore/Nuestros-Servicios-InStore-peroni.jpg?raw=true",
    name: "Peroni",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-InStore/Nuestros-Servicios-InStore-instores.jpg?raw=true",
    name: "instores",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-InStore/Nuestros-Servicios-InStore-adj-instores.jpg?raw=true",
    name: "instores",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-InStore/Nuestros-Servicios-InStore-adj-instore.jpg?raw=true",
    name: "instores",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-InStore/Nuestros-Servicios-InStore-QEV-TECH.jpg?raw=true",
    name: "instores",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-InStore/Nuestros-Servicios-InStore-LongChamp.png?raw=true",
    name: "LongChamp",
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
