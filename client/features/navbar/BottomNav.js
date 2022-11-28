import React from "react";
// import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import MapIcon from "@mui/icons-material/Map";
import HomeIcon from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import AccountMenu from "./AccountMenu";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {
  BottomNavigation,
  Paper,
  BottomNavigationAction,
  Box,
  CssBaseline,
} from "@mui/material";

export default function BottomNav() {
  return (
    // <Navbar
    //   className="justify-content-center"
    //   style={{ padding: "10px" }}
    //   bg="light"
    //   fixed="bottom"
    // >
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          {/* <Container className="justify-content-center"> */}
          {/* <Navbar.Brand href="/home"> */}
          <BottomNavigationAction
            href="/home"
            label="Home"
            icon={<HomeIcon />}
          />
          {/* </Navbar.Brand> */}
          {/* <Navbar.Brand href="/events"> */}
          <BottomNavigationAction
            label="Events"
            href="/events"
            icon={<EventAvailableIcon />}
          />
          {/* </Navbar.Brand> */}
          {/* <Navbar.Brand href="/map"> */}
          <BottomNavigationAction label="Map" href="/map" icon={<MapIcon />} />

          {/* </Navbar.Brand> */}
          {/* <Navbar.Brand href="/resources"> */}
          <BottomNavigationAction
            label="Resources"
            href="/resources"
            icon={<InfoSharpIcon />}
          />

          {/* </Navbar.Brand> */}
          {/* <Navbar.Brand label="user"> */}
          <BottomNavigationAction label="User" icon={<AccountMenu />} />

          {/* </Navbar.Brand> */}
          {/* </Container> */}
        </BottomNavigation>
      </Paper>
    </Box>
    // </Navbar>
  );
}
