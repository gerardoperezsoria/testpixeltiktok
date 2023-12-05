import * as React from 'react';
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logoless from '../images/logosvg1000x600.svg';

import Menus from '../elementsM/Menus'

import { useRouter } from 'next/router';
import { userService } from '../services';
import BasicButtons from '../elementsM/BasicButton';

const pages = ['inicio', 'certificaciones', 'precios', 'cursos', 'nosotros', 'blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [nosotros, setnosotros] = React.useState([
    "NOSOTROS"
  ]);
  const [inicio, setinicio] = React.useState([
    "INICIO"
  ]);

  const [sep, setsep] = React.useState([
    "EC0217.01", "EC0301", "EC0366", "EC0076"
  ]);

  const [microsoft, setmicrosoft] = React.useState([
    "EXCEL EXPERT", "EXCEL ASSOCIATE", "WORD ASSOCIATE", "PLAN DE CARRERA PROFESIONAL"
  ]);

  const [cursos, setcursos] = React.useState([
    // "MARKETING DIGITAL", "CHAT GPT"
    "EXCEL","EC0301"
  ]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function logout() {
    userService.logoutUser();
  }

  return (
    <AppBar position="static" color="transparent" style={{ backgroundColor: 'transparent' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Image
              src={logoless}
              alt="Picture of the author"
              width={120}
              height={120}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <div style={{ paddingRight: "5px" }}>
                  <BasicButtons titulo={"INICIO"} eventClick={() => { router.push('/') }} />
                </div>
                <div style={{ paddingRight: "5px" }}>
                  <Menus tituloprincipal="CERTIFICACIONES SEP" arraymenus={sep} />
                </div>
                <div style={{ paddingRight: "5px" }}>
                  <Menus tituloprincipal="CERTIFICACIONES MICROSOFT" arraymenus={microsoft} />
                </div>
                <div style={{ paddingRight: "5px" }}>
                  <Menus tituloprincipal="CURSOS" arraymenus={cursos} cursos/>
                </div>
                <BasicButtons titulo={"ALUMNOS"} eventClick={() => { router.push('/login') }} />
                <BasicButtons titulo={"NOSOTROS"} eventClick={() => { router.push('/nosotros') }} />
              
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <Image
              src={logoless}
              alt="Picture of the author"
              width={120}
              height={120}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div style={{ paddingRight: "5px" }}>
              <BasicButtons titulo={"INICIO"} eventClick={() => { router.push('/') }} />
            </div>
            <div style={{ paddingRight: "5px" }}>
              <Menus tituloprincipal="CERTIFICACIONES SEP" arraymenus={sep} />
            </div>
            <div style={{ paddingRight: "5px" }}>
              <Menus tituloprincipal="CERTIFICACIONES MICROSOFT" arraymenus={microsoft} />
            </div>
            <div style={{ paddingRight: "5px" }}>
              <Menus tituloprincipal="CURSOS" arraymenus={cursos} />
            </div>
            <BasicButtons titulo={"ALUMNOS"} eventClick={() => { router.push('/login') }} />
            <BasicButtons titulo={"NOSOTROS"} eventClick={() => { router.push('/nosotros') }} />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Ceducaty" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              <MenuItem key={1} onClick={() => { logout() }}>
                <Typography textAlign="center">Salir</Typography>
              </MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;