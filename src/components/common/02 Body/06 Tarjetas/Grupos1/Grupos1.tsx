import Image from 'next/image'

const grupos1 = [
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Tinder.jpg?raw=true',
    name: 'Tinder',
    category: { name: 'Eventos, Street Marketing' },
    description:
      'Evento en el Hotel Wela, en donde se informo el funcionamiento de la aplicación.',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Perrier.jpg?raw=true',
    name: 'Perrier',
    category: { name: 'Bebidas, Eventos, Festival, Sampling' },
    description:
      'Evento con Perrier en festivales: Madrid - Mercado de diseño, Mercado de Motores, Mulafest',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-MOTOGP.jpg?raw=true',
    name: 'MotoGP',
    category: { name: 'Bebidas, Eventos, Festival, Sampling' },
    description: 'Gran Premio de Cataluña, circuito de Montemelo.',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Samsung.jpg?raw=true',
    name: 'Samsung',
    category: { name: 'Eventos' },
    description:
      'Evento privado para invitados del MWC (mobile World congress).',
    },
  ]

  export default function Clients() {
    return (
    <div className="overflow-y-scroll h-75 flex h-screen sticky top-0">
      <div className="mx-auto py-6 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-2">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="lg:col-span-3">
            <ul
          role="list"
          className="overflow-y-scrollspace-y-12 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
        >
          {grupos1.map((grupos1) => (
            <li key={grupos1.name}>
              <div className="space-y-4">
                <div className="aspect-w-3">
                <Image
                  className="object-cover shadow-lg rounded-lg"
                  src={grupos1.Image}
                  alt={grupos1.name}
                  width={720}
                  height={1080}
                />
                </div>
                <div className="text-lg text-black leading-6 font-medium space-y-1">
                  <h3>{grupos1.name}</h3>
                </div>
                <div className="text-lg">
                  <p className="text-black">{grupos1.description}</p>
                </div>
                <ul role="list" className="flex space-x-5">
                </ul>
              </div>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </div>
    )
  }
  