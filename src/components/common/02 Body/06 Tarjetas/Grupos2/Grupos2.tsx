import Image from 'next/image'

const grupos2 = [
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-MM.jpg?raw=true',
    name: 'M&M',
    category: { name: 'Sampling' },
    description: 'Campaña de Sampling M&M, realizada en Andorra y Baqueira',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Figaro.jpg?raw=true',
    name: 'Figaro',
    category: { name: 'Eventos, Peluquería' },
    description:
      'Premios Fígaro. El evento más importante del calendario de la peluquería española, donde se presentaron las quince colecciones finalistas antes de la entrega de galardones.',
  },
  {
    Image: 
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Vikingo.jpg?raw=true',
    name: 'Vikingo',
    category: { name: 'Bebidas, Eventos' },
    description:
      'Evento realizado en el congreso CCIB (centre convencions internacional Barcelona).',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Telefonica.jpg?raw=true',
    name: 'Telefónica',
    category: { name: 'Eventos, Fashion' },
    description:
      'Proveedores oficiales durante 4 años, evento realizado en Diagonal 00 Torre Telefónica.',
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
          {grupos2.map((grupos2) => (
            <li key={grupos2.name}>
              <div className="space-y-4">
                <div className="aspect-w-3">
                <Image
                  className="object-cover shadow-lg rounded-lg"
                  src={grupos2.Image}
                  alt={grupos2.name}
                  width={720}
                  height={1080}
                />
                </div>
                <div className="text-lg text-black leading-6 font-medium space-y-1">
                  <h3>{grupos2.name}</h3>
                </div>
                <div className="text-lg">
                  <p className="text-black">{grupos2.description}</p>
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
  