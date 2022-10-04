import Image from "next/image";

const service = [
  {
    Image:
    "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Street-Marketing/Nuestros-Servicios-Street-MM.jpg?raw=true",
    name: "MM",
  },
  {
    Image:
      "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Street-Marketing/Nuestros-Servicios-Street-AUDI.jpg?raw=true",
    name: "AUDI",
  },
  {
    Image:
    "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Street-Marketing/Nuestros-Servicios-Street-Adidas.jpg?raw=true",
    name: "Adidas",
  },
  {
    Image:
    "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Street-Marketing/Nuestros-Servicios-Street-GINMG.jpg?raw=true",
    name: "GINMG",
  },
  {
    Image:
    "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Street-Marketing/Nuestros-Servicios-Street-Naked.jpg?raw=true",
    name: "Naked",
  },
  {
    Image:
    "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Street-Marketing/Nuestros-Servicios-Street-Perrier.png?raw=true",
    name: "Perrier",
  },
  {
    Image:
    "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Street-Marketing/Nuestros-Servicios-Street-TINDER.jpg?raw=true",
    name: "TINDER",
  },
  {
    Image:
    "https://github.com/miguelgargallo/images/blob/main/Nuestros-Servicios/Nuestros-Servicios-Street-Marketing/Nuestros-Servicios-Street-YAMAHA.jpg?raw=true",
    name: "YAMAHA",
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
              height={580}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
