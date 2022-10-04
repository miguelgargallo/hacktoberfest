import Image from "next/image";

const service = [
  {
    Image:
      "https://github.com/miguelgargallo/bcnhostess-4canvas/blob/main/brand-ambassador.jpg?raw=true",
    name: "Brand-Ambassador",
  },
  {
    Image:
    "https://github.com/miguelgargallo/bcnhostess-4canvas/blob/main/vipcompanion.jpg?raw=true",
    name: "Nuestros-VIP-Compannion",
  },
  {
    Image:
    "https://github.com/miguelgargallo/bcnhostess-4canvas/blob/main/guard.jpg?raw=true",
    name: "Personal-control-acceso",
  },
  {
    Image:
    "https://github.com/miguelgargallo/bcnhostess-4canvas/blob/main/mistery-shopper.jpg?raw=true",
    name: "Mystery-Shopper",
  },
];

export default function Tinder() {
  return (
    <div className="overflow-y-auto">
      <div className="px-8 py-8 grid grid-flow-col auto-cols-max gap-9">
        {service.map((service) => (
          <div key={service.name}>
            <Image
              className="object-cover shadow-lg rounded-lg object-right"
              src={service.Image}
              alt={service.name}
              width={220}
              height={410}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
