import { Typography, Stack } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';

function Footer() {

    const matchesMaxLetter = useMediaQuery('(max-width:1000px)');
    const matchesMinLetter = useMediaQuery('(max-width:600px)');
  
    const letter = () => {
      if (matchesMinLetter) return '20px'
      if (matchesMaxLetter) return '30px'
      return '30px'
    }

    const imagen = () => {
      if (matchesMinLetter) return '70px'
      if (matchesMaxLetter) return '80px'
      return '80px'
    }

  return (
        <Stack sx={{ width: '100%', height: '200px', backgroundColor: '#DDD' }}>
        <Stack p={2} sx={{ height: '100%' }} justifyContent="center" alignItems="center">
            <img src="/public/logo.png" style={{ width: imagen() }}/>
          <Typography sx={{ fontWeight: '400', color: 'black', fontSize: letter(), fontFamily: 'Playball' }}>Alejandra & Brandon</Typography>
        </Stack>
        </Stack>
  )
}

export default Footer