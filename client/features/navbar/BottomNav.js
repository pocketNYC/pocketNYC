import React from "react";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import MapIcon from "@mui/icons-material/Map";
import HomeIcon from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import AccountMenu from "./AccountMenu";

export default function BottomNav() {
  return (
    <div>
      <MDBNavbar fixed="bottom" light bgColor="light">
        <MDBContainer fluid size="sm">
          <MDBNavbarBrand href="/" label="Home">
            <HomeIcon />
          </MDBNavbarBrand>

          <MDBNavbarBrand href="/events" label="Events">
            <EventAvailableIcon />
          </MDBNavbarBrand>

          <MDBNavbarBrand href="/map" label="Map">
            <MapIcon />
          </MDBNavbarBrand>

          <MDBNavbarBrand href="/resources" label="Resources">
            <InfoSharpIcon />
          </MDBNavbarBrand>

          <MDBNavbarBrand label="User">
            <AccountMenu />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
