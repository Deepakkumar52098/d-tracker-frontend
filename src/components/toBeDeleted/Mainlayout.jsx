import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'

const drawerWidth = 220

const MainLayout = ({ setIsAuthenticated }) => {

  return (

    <Box sx={{ display: 'flex' }}>

      <Navbar setIsAuthenticated={setIsAuthenticated} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: '64px',
          marginLeft: `${drawerWidth}px`,
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`
        }}
      >
        <Outlet />
      </Box>

    </Box>
  )
}

export default MainLayout
