import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";
import ContactLine from "./contact-line";
import Link from "next/link";

const pages = [
  "Jsem Senior 60+",
  "Chci Pomáhat",
  "O Moudré Síti",
  "Partneři",
  "Kontakty",
  "Gdpr",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" color="primary">
      <ContactLine />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Box
              component="img"
              sx={{
                height: 50,
                p: 1,
              }}
              src="../../images/logo/logo.png"
            />
          </Link>
          <Link href="/">
            <Typography
              variant="h5"
              noWrap
              fontWeight="fontWeightMedium"
              sx={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Moudrá Síť
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "none", lg: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 3, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="warning"
              sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
            >
              REGISTROVAT SE
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
            >
              PŘIHLÁSIT SE
            </Button>
          </Stack>
          <Box
            justifyContent="flex-end"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", lg: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className="navbar-menu"
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
