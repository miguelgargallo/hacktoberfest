import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import './Components/assets/uifaces-avatar.jpg'
export default function App() {

  return (
    <FloatingWhatsApp
    phoneNumber='14077067844'
    accountName='✅ BCN Hostess'
    avatar = 'https://github.com/miguelgargallo/bcnhostess-4canvas/blob/main/uifaces-avatar.jpg?raw=true'
    statusMessage = 'Hola ¿En qué podemos ayudarte?'
    chatMessage='Pide presupuesto o contáctanos por aquí 🤝 qué deseas?'
    placeholder='✏️ Contacta ahora...'
    darkMode
    allowClickAway
    allowEsc
    height={300}
  />
  )
}
