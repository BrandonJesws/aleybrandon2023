import { Link } from '@mui/material'

function Menu() {

  return (
    <nav style={{
      background: '#eee',
      position: 'absolute',
      padding: '5px',
      display: 'flex',
      justifyContent: 'end',
      width: '100%',
      boxSizing: 'border-box',
      alignItems: 'center'
      }}>
        <div>
            <ul style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
        }}>
                <li style={{ margin: '0 25px' }}><Link href='#'>Ubicacion</Link></li>
                <li style={{ margin: '0 25px' }}><Link href='#'>Mesa de regalos</Link></li>
                <li style={{ margin: '0 25px' }}><Link href='#'>Mesa de regalos</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Menu