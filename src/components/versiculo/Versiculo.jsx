import { useEffect, useState } from 'react';
import { Typography, Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ItemCuentaRegresiva from '/src/components/cuentaRegresiva/ItemCuentaRegresiva';

function Versiculo() {
  const matchesMaxLetter = useMediaQuery('(max-width:1000px)');
  const matchesMinLetter = useMediaQuery('(max-width:600px)');

  const letter = () => {
    if (matchesMinLetter) return '25px'
    if (matchesMaxLetter) return '50px'
    return '50px'
  }

  const paddingLetter = () => {
    if (matchesMinLetter) return 5
    if (matchesMaxLetter) return 5
    return 20
  }

  return (
    <div style={{ 
        backgroundImage: 'url("/public/IMG_03.png")',
        filter: 'brightness(95%)',
        minHeight: '60vh',
        width: '100%', 
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        marginTop: '80px',
        marginBottom: '80px'
    }}>
      <Stack alignItems='center' justifyContent='center' sx={{ height: '100%', padding: paddingLetter() }} >
      <Typography sx={{ fontWeight: '400', fontFamily: 'Playball', color: 'white', fontSize: letter() }}>
            Mejores son dos que uno; porque tienen mejor paga de su trabajo. Porque si cayeren, el uno levantará a su compañero…” - Eclesiastés 4:9-12
        </Typography>
      </Stack>
    </div>
  )
}

export default Versiculo