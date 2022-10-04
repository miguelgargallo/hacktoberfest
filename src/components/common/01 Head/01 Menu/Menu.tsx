// Welcome to SushiJS at SushiJS.com by ITAMAESAN at Itamaesan.org
import React from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '../03 Logo'

export default function Menu() {
  return (
<div className="py-1">
        <div className='hidden md:inline'>
          <motion.nav
            className='px-8 drop-shadow-xl max-w-6xl w-full bg-white-800 z-[1] filter-blur dark:bg-white top-2 md:top-4 rounded-md mx-auto flex justify-between items-center'
            animate={{ y: 25 }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex flex-row gap-1 text-tertiary'>
              <Link href='/servicios/instore'>
                <a className='px-2 text-center text-xl hover:text-primary transition-all cursor-pointer'>
                  In Store
                </a>
              </Link>
            </div>
            <div className='flex flex-row gap-1 text-tertiary'>
              <Link href='/servicios/streetmarketing'>
                <a className='px-2 text-center text-xl hover:text-primary transition-all cursor-pointer'>
                  Street Marketing
                </a>
              </Link>
            </div>
            <div className='flex flex-row gap-1 text-tertiary'>
              <Link href='/servicios/feriascongresos'>
                <a className='px-2 text-center text-xl hover:text-primary transition-all cursor-pointer'>
                  Ferias y Congresos
                </a>
              </Link>
            </div>
            <div className='flex flex-row gap-1 text-tertiary'>
              <Logo />
            </div>
            <div className='flex flex-row gap-1 text-tertiary'>
              <Link href='/servicios/eventosimagen'>
                <a className='px-2 text-center text-xl hover:text-primary transition-all cursor-pointer'>
                  Eventos de Imagen
                </a>
              </Link>
            </div>
            <div className='flex flex-row gap-1 text-tertiary'>
              <Link href='/servicios/otrosservicios'>
                <a className='px-2 text-center text-xl hover:text-primary transition-all cursor-pointer'>
                  Otros Servicios
                </a>
              </Link>
            </div>
            <div className='flex flex-row gap-1 text-tertiary'>
              <Link href='/servicios/uniformes'>
                <a className='px-2 text-center text-xl hover:text-primary transition-all cursor-pointer'>
                  Uniformes
                </a>
              </Link>
            </div>
          </motion.nav>
        </div>
      </div>
  )
}
