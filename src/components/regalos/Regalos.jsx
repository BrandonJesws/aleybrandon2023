import { Stack, Grid, Typography, Box, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

function Regalos() {
    const matchesMaxLetter = useMediaQuery('(max-width:1000px)');
    const matchesMinLetter = useMediaQuery('(max-width:600px)');

  const paddingContainer = () => {
    if (matchesMinLetter) return 1
    if (matchesMaxLetter) return 2
    return 10
  }

  const directionStack = () => {
    if (matchesMinLetter) return 'column'
    if (matchesMaxLetter) return 'row'
    return 'row'
  }

  
  const imagenes = () => {
    if (matchesMinLetter) return '80px'
    if (matchesMaxLetter) return '150px'
    return '150px'
  }

  const fontSizeTitle = () => {
    if (matchesMinLetter) return '30px'
    if (matchesMaxLetter) return '150px'
    return '150px'
  }


  return (
    <Box py={paddingContainer()} px={paddingContainer()} my={paddingContainer()} sx={{ background: '#faf8f7' }}>
        <Stack direction={directionStack()} spacing={5} sx={{ paddingTop: '50px', paddingLeft: '20px', maxHeight: '200px' }} justifyContent='center'>
            <Typography sx={{ fontFamily: 'Playball', color: '#BD945A', fontSize: 'bold', fontSize: fontSizeTitle()  }}>Mesa de regalos:</Typography>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={5}>
                    <Link href="https://www.amazon.com.mx/?ref_=icp_country_from_us" target="_blank">
                        <div style={{ width: imagenes(), marginTop: '8px' }}>
                            <img src="/public/amazon2.png" style={{ width: '100%', height: '100%', filter: 'grayscale(100%)' }} />
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={5}>
                    <Link href="https://www.amazon.com.mx/?ref_=icp_country_from_us" sx={{ pl: 2 }} target="_blank">
                        <img src="/public/liverpool2.png" style={{ width: imagenes(), filter: 'grayscale(100%)' }} />
                    </Link>
                </Grid>
            </Grid>
        </Stack>
    </Box>
  )
}

export default Regalos