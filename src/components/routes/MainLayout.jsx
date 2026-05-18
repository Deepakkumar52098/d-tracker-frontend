import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'

const MainLayout = ({setIsAuthenticated}) => {
  return (
    <>
      <Navbar setIsAuthenticated={setIsAuthenticated} />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout