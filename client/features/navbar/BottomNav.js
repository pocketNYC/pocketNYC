import React from "react";
// import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import MapIcon from "@mui/icons-material/Map";
import HomeIcon from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import AccountMenu from "./AccountMenu";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function BottomNav() {
  return (
    <Navbar
      className="justify-content-center"
      style={{ padding: "10px" }}
      bg="light"
      fixed="bottom"
    >
      <Container className="justify-content-center">
        <Navbar.Brand href="/home">
          <HomeIcon />
        </Navbar.Brand>
        <Navbar.Brand href="/events">
          <EventAvailableIcon />
        </Navbar.Brand>
        <Navbar.Brand href="/map">
          <MapIcon />
        </Navbar.Brand>
        <Navbar.Brand href="/resources">
          <InfoSharpIcon />
        </Navbar.Brand>
        <Navbar.Brand label="user">
          <AccountMenu />
        </Navbar.Brand>
      </Container>
    </Navbar>

    // <MDBNavbar fixed="bottom" light bgColor="light">
    //   <MDBContainer>
    //     <MDBNavbarBrand href="/" label="Home">
    //       <HomeIcon />
    //     </MDBNavbarBrand>

    //     <MDBNavbarBrand href="/events" label="Events">
    //       <EventAvailableIcon />
    //     </MDBNavbarBrand>

    //     <MDBNavbarBrand href="/map" label="Map">
    //       <MapIcon />
    //     </MDBNavbarBrand>

    //     <MDBNavbarBrand href="/resources" label="Resources">
    //       <InfoSharpIcon />
    //     </MDBNavbarBrand>

    //     <MDBNavbarBrand label="User">
    //       <AccountMenu />
    //     </MDBNavbarBrand>
    //   </MDBContainer>
    // </MDBNavbar>
  );
}
