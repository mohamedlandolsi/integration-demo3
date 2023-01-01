import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";
import { createTheme } from "@mui/material/styles";

import { useContext } from "react";
import AuthContext from "../../stores/authContext";
import { Logout, LogoutOutlined, Settings } from "@mui/icons-material";
import { Divider, ListItemIcon } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DFF6FF",
    },
  },
});

//

function MainHeader() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <QuizOutlinedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Link href="/" passHref>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Skill Tester
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/tests">Tests</Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/formations">Formations</Link>
              </MenuItem>
            </Menu>
          </Box>
          <QuizOutlinedIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Link href="/" passHref>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Skill Tester
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link href="/tests" passHref>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Tests
              </Button>
            </Link>
            <Link href="/formations" passHref>
              <Button
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Formations
              </Button>
            </Link>
          </Box>
          {authReady && (
            <Box>
              {user && (
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <Box>
                      {/* <Button variant="contained" {...bindTrigger(popupState)}>
                        {user.user_metadata.full_name}
                      </Button> */}
                      {/* <Button {...bindTrigger(popupState)}>
                        <AccountCircleIcon fontSize="large" />
                      </Button> */}
                      <IconButton
                        {...bindTrigger(popupState)}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        <AccountCircleIcon fontSize="large" color="primary" />
                      </IconButton>
                      {user && (
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem disabled>
                            <Typography variant="h6">
                              {user.user_metadata.full_name}
                            </Typography>
                          </MenuItem>
                          <Divider component="li" />
                          <MenuItem onClick={popupState.close}>
                            <ListItemIcon>
                              <InfoIcon fontSize="small" />
                            </ListItemIcon>
                            <Link href="/profile" passHref>
                              Profil
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={popupState.close}>
                            <ListItemIcon>
                              <DashboardIcon fontSize="small" />
                            </ListItemIcon>
                            <Link href="/profile/dashboard" passHref>
                              Tableau de Bord
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={logout}>
                            <ListItemIcon>
                              <Logout fontSize="small" />
                            </ListItemIcon>
                            Se Déconnecter
                          </MenuItem>
                        </Menu>
                      )}
                    </Box>
                  )}
                </PopupState>
              )}
              {!user && (
                <Button
                  onClick={login}
                  sx={{ my: 2, color: "#DFF6FF", display: "block" }}
                >
                  S&apos;authentifier
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainHeader;
