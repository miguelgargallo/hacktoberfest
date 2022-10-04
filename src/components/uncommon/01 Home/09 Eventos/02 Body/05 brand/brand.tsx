import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const client = [
{
Name: 'evento',
Image:
'https://github.com/miguelgargallo/bcnhostess-4canvas/blob/main/1.jpg?raw=true',
},
{
Name: 'evento',
Image:
  'https://github.com/miguelgargallo/bcnhostess-4canvas/blob/main/2.jpg?raw=true',
},
{
Name: 'evento',
Image:
  'https://github.com/miguelgargallo/bcnhostess-4canvas/blob/main/3.jpg?raw=true',
},
    {
Name: 'evento',
Image:
'https://github.com/miguelgargallo/bcnhostess-4canvas/blob/main/4.jpg?raw=true',
},
]


export default function Tinder() {
  return (
    <div className="overflow-y-auto ">
      <div className="px-16 grid grid-flow-col auto-cols-max gap-9">
        {client.map((client) => (
          <div key={client.name}>
            <Image
              className="object-cover shadow-lg rounded-lg"
              src={client.Image}
              alt={client.name}
              width={425}
              height={425}
            />
            <div className="max-w-sm mx-auto overflow-hidden">
              <h3>{client.name}</h3>
              <p className="text-black">{client.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
