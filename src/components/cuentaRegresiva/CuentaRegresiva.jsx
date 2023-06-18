import { useEffect, useState } from 'react';
import { Typography, Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ItemCuentaRegresiva from '/src/components/cuentaRegresiva/ItemCuentaRegresiva';

function CuentaRegresiva() {

  const [segundos, setSegundos] = useState('00');
  const [minutos, setMinutos] = useState('00');
  const [horas, setHoras] = useState('00');
  const [dias, setDias] = useState('00');

const DATE_TARGET = new Date('07/15/2023 12:30 PM');
// Milliseconds for the calculations
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

function updateCountdown() {
    // Calcs
    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
    const REMAINING_SECONDS_STRING = REMAINING_SECONDS.toString().padStart(2, '0');
    const REMAINING_MINUTES_STRING = REMAINING_MINUTES.toString().padStart(2, '0');
    const REMAINING_HOURS_STRING = REMAINING_HOURS.toString().padStart(2, '0');
    const REMAINING_DAYS_STRING = REMAINING_DAYS.toString().padStart(2, '0');

    setSegundos(REMAINING_SECONDS_STRING);
    setMinutos(REMAINING_MINUTES_STRING);
    setHoras(REMAINING_HOURS_STRING);
    setDias(REMAINING_DAYS_STRING);
}

const matchesMaxLetter = useMediaQuery('(max-width:1000px)');
const matchesMinLetter = useMediaQuery('(max-width:600px)');

const fontTitle = () => {
  if (matchesMinLetter) return '28px'
  if (matchesMaxLetter) return 2
  return '60px'
}

const font = () => {
  if (matchesMinLetter) return 2
  if (matchesMaxLetter) return 2
  return 10
}

const leftDiv = () => {
  if (matchesMinLetter) return '10%'
  if (matchesMaxLetter) return '10%'
  return '35%'
}

const fontSize = () => {
  if (matchesMinLetter) return 16
  if (matchesMaxLetter) return 16
  return 18
}

useEffect(() => {
  setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
}, [])

  return (
    <div style={{
        marginTop: 50,
        backgroundImage: 'url("/public/IMG_04.png")',
        filter: 'brightness(95%)',
        height: '60vh',
        width: '100%', 
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
    }}>
      <Stack direction='column' spacing={5} alignItems='center' justifyContent='center' sx={{ width: '100%', height: '100%' }} >
        <Typography sx={{ fontWeight: '400', fontFamily: 'Playball', color: 'white', fontSize: fontTitle() }}>Seremos una familia en:</Typography>
        <Stack direction='row' spacing={5} alignItems='center' justifyContent='center' sx={{ width: '100%' }} >
          <ItemCuentaRegresiva value={dias} unidad='Dias' />
          <ItemCuentaRegresiva value={horas} unidad='Horas' />
          <ItemCuentaRegresiva value={minutos} unidad='Minutos' />
          <ItemCuentaRegresiva value={segundos} unidad='Segundos' />
        </Stack>
      </Stack>
    </div>
  )
}

export default CuentaRegresiva