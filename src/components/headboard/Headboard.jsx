import { Typography, Stack } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';

function Headboard() {
  const matchesMaxLetter = useMediaQuery('(max-width:1000px)');
  const matchesMinLetter = useMediaQuery('(max-width:600px)');

  const letter = () => {
    if (matchesMinLetter) return 35
    if (matchesMaxLetter) return 60
    return 80
  }

  const letterFecha = () => {
    if (matchesMinLetter) return 18
    if (matchesMaxLetter) return 20
    return 30
  }

  return (
    <>
    <div style={{ 
      width: '100%',
      overflow: 'hidden',
      height: '100vh',
      backgroundImage: 'url("/public/IMG_01.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center'
      }}>
        <Stack spacing={0} alignItems='center' mt= '10vh'>
          <Typography sx={{
            fontFamily: 'Playball',
            fontSize: letter(),
            color: '#BD945A',
          }}>
            Alejandra & Brandon
          </Typography>
          <Typography sx={{ fontSize: letterFecha(), fontFamily: 'Share Tech Mono', fontWeight: '400', color: 'white' }} variant='subtitle1'>15 - 07 - 2023</Typography>
        </Stack>
    </div>
    </>
  )
}

export default Headboard