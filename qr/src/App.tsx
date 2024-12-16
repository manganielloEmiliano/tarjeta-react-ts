import { Tarjeta } from './componentes/tarjetaQr/tarjeta.tsx'
import './App.css'

function App() {


  return (
    <>
      <Tarjeta
        alt='la imagen de el qr'
        imagen='/image-qr-code.png'
        textoBold='Improve your front-end skills by building projects'
        texto='Scan the QR code to visit Frontend Mentor and take your coding skills to the next level' />

    </>
  )
}

export default App
