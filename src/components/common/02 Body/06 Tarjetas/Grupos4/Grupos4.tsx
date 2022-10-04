import Image from 'next/image'

const grupos4 = [
  {
    Image:
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Montibello.jpg?raw=true',
    name: 'Montibello',
    category: { name: 'Eventos, Peluquería' },
    description:
      'Principal cliente, servicio en la Gala realizada en la feria Cosmo Beauty. Fabrican y distribuyen productos de cosmética profesional.',
  },
  {
    Image: 
    'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Adidas.jpg?raw=true',
    name: 'Adidas',
    category: { name: 'Eventos deportivos, Motor' },
    description:
      'Presentación nuevo lanzamiento, en el Gran Premio de España F1, Montemelo, circuito de Catalunya.',
  },
  {
    Image:
      'https://github.com/sushi-js/SushiJS-Boliperplate/blob/main/src/common/components/elements/02%20Body/07%20CardsProps/BCNHostess-cliente-Beefeater.jpg?raw=true',
    name: 'Beefeater',
    category: { name: 'Bebidas, Eventos, Street Marketing' },
    description:
      'Evento con Beefeater en Mad Cool Festival. Festival de música que se realiza en Madrid en donde el arte.',
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
        {grupos4.map((grupos4) => (
          <li key={grupos4.name}>
            <div className="space-y-4">
              <div className="aspect-w-3">
              <Image
                className="object-cover shadow-lg rounded-lg"
                src={grupos4.Image}
                alt={grupos4.name}
                width={720}
                height={1080}
              />
              </div>
              <div className="text-lg text-black leading-6 font-medium space-y-1">
                <h3>{grupos4.name}</h3>
              </div>
              <div className="text-lg">
                <p className="text-black">{grupos4.description}</p>
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
