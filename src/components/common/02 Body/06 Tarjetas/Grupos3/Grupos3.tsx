import Image from 'next/image'

const grupos3 = [
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Corona.jpg?raw=true',
    name: 'Corona',
    category: { name: 'Bebidas, Eventos, Street Marketing' },
    description: 'Campaña de verano realizada en Barcelona y alrededores.',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-IQOS.jpg?raw=true',
    name: 'IQOS',
    category: { name: 'Eventos, In Store' },
    description:
      'Co_Lab Café by IQOS, Madrid. Espacio en el que nuestros expertos te asesorarán sobre este nuevo dispositivo electrónico que calienta el tabaco en lugar de quemarlo y te resolverán cualquier duda o incidencia.',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-VICE.jpg?raw=true',
    name: 'VICE',
    category: { name: 'Eventos, Eventos deportivos' },
    description:
      'Festival Cara B, es un festival de cultura musical independiente y urbana, que se celebra en Barcelona, se posiciona como el principal escaparate de las tendencias musicales y los sonidos más frescos del momento.',
  },
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Movistar.jpg?raw=true',
    name: 'Movistar',
    category: { name: 'Eventos, Fashion' },
    description:
      'Durante años fuimos los responsable de proveer el staff para grandes premios no solo de F1 sino que también de Moto GP, conocemos muy bien los protocolos de actuación en los circuitos.',
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
          {grupos3.map((grupos3) => (
            <li key={grupos3.name}>
              <div className="space-y-4">
                <div className="aspect-w-3">
                <Image
                  className="object-cover shadow-lg rounded-lg"
                  src={grupos3.Image}
                  alt={grupos3.name}
                  width={720}
                  height={1080}
                />
                </div>
                <div className="text-lg text-black leading-6 font-medium space-y-1">
                  <h3>{grupos3.name}</h3>
                </div>
                <div className="text-lg">
                  <p className="text-black">{grupos3.description}</p>
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
  