import { Typography } from '@mui/material'
import Headboard from './components/headboard/Headboard';
import Invitacion from './components/invitacion/Invitacion';
import CuentaRegresiva from './components/cuentaRegresiva/CuentaRegresiva';
import Regalos from './components/regalos/Regalos';
import Versiculo from './components/versiculo/Versiculo';
import Footer from './components/footer/Footer';
import './App.css';

function App() {

  return (
    <div style={{ padding: 0, backgroundColor: '#faf8f7' }}>
      <Headboard />
      <Invitacion />
      <CuentaRegresiva />
      <Regalos />
      <Versiculo />
      <Footer />
    </div>
  )
}

export default App
