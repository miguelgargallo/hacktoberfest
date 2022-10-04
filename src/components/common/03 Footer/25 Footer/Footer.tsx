import Link from 'next/link'
import React from 'react'
import App from '../../02 Body/08 Whatsapp/App'
import Bottom from "../../03 Footer/26 Bottom";

const ExternalLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    className='text-gray-500 hover:text-gray-600 transition'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <div className="">
            <Bottom />
      <hr className='w-full mb-8' />
      <div className='w-full max-w-4xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3 mx-auto flex justify-between items-center'>
        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <a className='text-black hover:text-black transition'>Home</a>
          </Link>
          <Link href='/#'>
          Conacto
          </Link>
          <Link href='/#'>
          Presupuesto
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link href='/servicios/instore'>
            In Store
          </Link>
          <Link href='/servicios/streetmarketing'>
          Street Marketing
          </Link>
          <Link href='/servicios/feriascongresos'>
          Ferias y Congresos
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link href='/servicios/eventosimagen'>
          Eventos de Imagen
          </Link>
          <Link href='/servicios/otroseventos'>
          Otros Eventos
          </Link>
          <Link href='/servicios/uniformes'>
          Uniformes
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link href='/legal/legal'>
          Legal
          </Link>
          <Link href='/legal/tos'>
          TOS
          </Link>
          <ExternalLink href='https://instagram.com/bcnhostess_hair'>
          Instagram
          </ExternalLink>
        </div>
      </div>
      <App />
    </div>
  )
}
