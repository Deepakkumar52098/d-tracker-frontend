import * as React from 'react'

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import { useNavigate } from 'react-router-dom'

import FormsModal from './FormsModal'
import SalaryBreakup from '../salaryDetails/SalaryBreakup'
import SalaryDetailsActions from '../salaryDetails/SalaryDetailsActions'

const pages = [
  'Dashboard',
  'Transactions',
  'Visualizations',
  'Goals',
  'Books Repo'
]

const settings = ['Profile', 'Logout']

const drawerWidth = 220

const Navbar = ({ setIsAuthenticated }) => {

  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const [openIncomeModal, setOpenIncomeModal] =
    React.useState(false)

  const [income, setIncome] = React.useState(0)

  const [selectedDate, setSelectedDate] =
    React.useState(new Date())

  const navigate = useNavigate()

  // =========================
  // NAVIGATION
  // =========================

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (e, page) => {

    setAnchorElNav(null)

    if (page === 'Dashboard') {
      navigate('/')
    }
    else if (page === 'Transactions') {
      navigate('/transactions')
    }
    else if (page === 'Visualizations') {
      navigate('/visualization')
    }
    else if (page === 'Goals') {
      navigate('/goals')
    }
    else if (page === 'Books Repo') {
      navigate('/booksRepo')
    }
  }

  // =========================
  // USER MENU
  // =========================

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = (mode) => {

    if (mode === 'Logout') {
      localStorage.setItem('token', '')
      setIsAuthenticated(false)
    }

    setAnchorElUser(null)
  }

  // =========================
  // FORM HANDLERS
  // =========================

  const handleInputChange = (value) => {
    setIncome(value)
  }

  const handleUpdate = () => {

    fetch('http://localhost:8080/salaryBreakup/addDetails', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        income,
        date: selectedDate
      })
    })
      .then(async (res) => {

        const data = await res.json()

        if (res.status === 201) {
          setOpenIncomeModal(false)
          return
        }

        throw new Error(data.message)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (

    <>
      {/* ========================= */}
      {/* TOP NAVBAR */}
      {/* ========================= */}

      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >

        <Toolbar disableGutters>

          {/* DESKTOP LOGO */}

          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft: '50px'
            }}
          >
            D's-TRACKER
          </Typography>

          {/* MOBILE MENU */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' }
            }}
          >

            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >

              {pages.map((page) => (

                <MenuItem
                  key={page}
                  onClick={(e) => handleCloseNavMenu(e, page)}
                >

                  <Typography textAlign="center">
                    {page}
                  </Typography>

                </MenuItem>

              ))}

            </Menu>

          </Box>

          {/* MOBILE LOGO */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            D's-TRACKER
          </Typography>

          {/* DESKTOP NAVIGATION */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' }
            }}
          >

            {pages.map((page) => (

              <Button
                key={page}
                onClick={(e) => handleCloseNavMenu(e, page)}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block'
                }}
              >
                {page}
              </Button>

            ))}

          </Box>

          {/* USER PROFILE */}

          <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Open settings">

              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0,
                  marginRight: '50px'
                }}
              >
                <Avatar alt="Deepakkumar D" />
              </IconButton>

            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >

              {settings.map((setting) => (

                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >

                  <Typography textAlign="center">
                    {setting}
                  </Typography>

                </MenuItem>

              ))}

            </Menu>

          </Box>

        </Toolbar>

      </AppBar>

      {/* ========================= */}
      {/* LEFT DRAWER */}
      {/* ========================= */}

      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: '64px'
          }
        }}
      >

        <List>

          <ListItemButton
            onClick={() => navigate('/calculator')}
          >
            <ListItemText primary="Calculator" />
          </ListItemButton>

          <ListItemButton
            onClick={() => setOpenIncomeModal(true)}
          >
            <ListItemText primary="Add Income" />
          </ListItemButton>

        </List>

      </Drawer>

      {/* ========================= */}
      {/* ADD INCOME MODAL */}
      {/* ========================= */}

      {
        openIncomeModal &&

        <FormsModal
          openPopUp={openIncomeModal}
          setOpenPopUp={setOpenIncomeModal}
          title="Add Income Details"
          dialogActions={
            <SalaryDetailsActions
              handleUpdate={handleUpdate}
              mode="Add"
            />
          }
        >

          <SalaryBreakup
            setSelectedDate={setSelectedDate}
            handleInputChange={handleInputChange}
            selectedDate={selectedDate}
            income={income}
            mode="Add"
          />

        </FormsModal>
      }

    </>
  )
}

export default Navbar
