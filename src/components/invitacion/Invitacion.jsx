import { Grid, Typography, Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

function Invitacion() {
  const matchesMaxLetter = useMediaQuery('(max-width:1000px)');
  const matchesMinLetter = useMediaQuery('(max-width:600px)');

  const paddingContainery = () => {
    if (matchesMinLetter) return 2
    if (matchesMaxLetter) return 2
    return 15
  }

  const paddingContainerx = () => {
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



  return (
    <Grid container direction='row-reverse' sx={{ py: paddingContainery(), px: paddingContainerx(), minHeight: '100vh' }}>
      <Grid item xs={12} md={6}>
        <Stack spacing={2} pt={2} px={paddingContainerx()}>
          <Stack>
            <Typography sx={{ fontFamily: 'Playball', color: '#BD945A'  }} variant='h4'>¡Nos casamos!</Typography>
          </Stack>
          <Stack>
            <Typography sx={{ px: 1, fontFamily: 'Inter', color: '#888', lineHeight: 2, fontSize: fontSize()  }}>
              Una propuesta, un sí y una decisión que tomamos juntos. Nuestro amor ha crecido en nosotros, ha madurado y florecido, a veces sencillo, otras caótico pero siempre maravilloso. Así comienza una nueva etapa en nuestras vidas.
            </Typography>
          </Stack>
          <Stack sx={{ pt: 4 }}>
            <Typography sx={{ fontFamily: 'Playball', color: '#BD945A'  }} variant='h4'>Familia Osorio Estrella</Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography sx={{ px: 1, fontFamily: 'Inter', color: '#888', lineHeight: 2, fontSize: fontSize()  }}>
              Si hay algo que queremos en nuestra boda, es compartir con nuestros amigos y familiares un evento tan especial para nosotros como lo es la unión de nuestro amor. Nos hace inmensamente felices que puedas acompañarnos, así que más que cualquier cosa estamos agradecidos por tu presencia.
            </Typography>
            <Typography sx={{ px: 1, fontFamily: 'Inter', color: '#888', lineHeight: 2, fontSize: fontSize()  }}>
              Los esperamos el próximo sabado <span style={{ fontFamily: 'Share Tech Mono', color: '#555', fontWeight: '600', lineHeight: 2, fontSize: fontSize()  }}>
              15 de Julio del 2023
            </span> a las 12:30 PM en el salon los cedros.
            </Typography>
          </Stack>
        </Stack>
        <Typography>
        
        </Typography>
      </Grid>
      {
        !matchesMinLetter && (
          <Grid item xs={12} md={6} sx={{ minHeight: '70vh' }}>
        <div style={{ border: '10px solid #BD945A', position: 'relative', width: '55%', height: '90%', left: leftDiv()  }}>
          <div style={{
            position: 'absolute',
            width: '100%',
            top: '50px',
            right: '-50px',
            height: '100%',
            background: 'url("/public/IMG_02.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
            }}>
          </div>
        </div>
      </Grid>
        )
      }
      
      
    </Grid>
  )
}

export default Invitacion