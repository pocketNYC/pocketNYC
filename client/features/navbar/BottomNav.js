import React from "react";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import MapIcon from "@mui/icons-material/Map";
import HomeIcon from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import AccountMenu from "./AccountMenu";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function BottomNav() {
  return (
    <MDBNavbar fixed="bottom" light bgColor="light">
      <MDBContainer>
        {/* <OverlayTrigger placement="top" overlay={<Tooltip> Home</Tooltip>}> */}
        <MDBNavbarBrand href="/" label="Home">
          <HomeIcon />
        </MDBNavbarBrand>
        {/* </OverlayTrigger> */}

        {/* <OverlayTrigger placement="top" overlay={<Tooltip>Events</Tooltip>}> */}
        <MDBNavbarBrand href="/events" label="Events">
          <EventAvailableIcon />
        </MDBNavbarBrand>
        {/* </OverlayTrigger> */}

        {/* <OverlayTrigger placement="top" overlay={<Tooltip>Map</Tooltip>}> */}
        <MDBNavbarBrand href="/map" label="Map">
          <MapIcon />
        </MDBNavbarBrand>
        {/* </OverlayTrigger> */}

        {/* <OverlayTrigger placement="top" overlay={<Tooltip>Resources</Tooltip>}> */}
        <MDBNavbarBrand href="/resources" label="Resources">
          <InfoSharpIcon />
        </MDBNavbarBrand>
        {/* </OverlayTrigger> */}

        {/* <OverlayTrigger placement="top" overlay={<Tooltip>User</Tooltip>}> */}
        <MDBNavbarBrand label="User">
          <AccountMenu />
        </MDBNavbarBrand>
        {/* </OverlayTrigger> */}
      </MDBContainer>
    </MDBNavbar>
  );
}
