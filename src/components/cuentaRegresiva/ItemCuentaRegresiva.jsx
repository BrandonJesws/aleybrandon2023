import { Typography, Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

function ItemCuentaRegresiva({ value, unidad }) {

const matchesMaxLetter = useMediaQuery('(max-width:1000px)');
const matchesMinLetter = useMediaQuery('(max-width:600px)');

const fontNumber = () => {
  if (matchesMinLetter) return '25px'
  if (matchesMaxLetter) return 2
  return '55px'
}

const fontletter = () => {
  if (matchesMinLetter) return '14px'
  if (matchesMaxLetter) return 2
  return '22px'
}

const paddings = () => {
  if (matchesMinLetter) return 0
  if (matchesMaxLetter) return 2
  return 5
}

  return (
        <Stack spacing={paddings()}>
        <Stack p={0}>
          <Typography sx={{ fontWeight: 'bold', color: 'white', fontSize: fontNumber(), fontFamily: 'Roboto' }}>{value}</Typography>
          <Typography sx={{ fontWeight: '500', color: 'white', fontSize: fontletter(), fontFamily: 'Roboto', textAlign: 'center' }}>{unidad}</Typography>
        </Stack>
        </Stack>
  )
}

export default ItemCuentaRegresiva