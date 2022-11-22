import React from "react";
import { useSelector } from "react-redux";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MapIcon from "@mui/icons-material/Map";
import HomeIcon from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";

export default function BottomNav() {
  const userId = useSelector((state) => state.auth.me.id);

  return (
    <>
      <MDBNavbar fixed="bottom" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <HomeIcon />
          </MDBNavbarBrand>

          <MDBNavbarBrand href="/events">
            <EventAvailableIcon />
          </MDBNavbarBrand>

          <MDBNavbarBrand href="/map">
            <MapIcon />
          </MDBNavbarBrand>

          <MDBNavbarBrand href="/resources">
            <InfoSharpIcon />
          </MDBNavbarBrand>

          <MDBNavbarBrand href={`/users/${userId}`}>
            <AccountBoxIcon />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
