import React from "react";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import MapIcon from "@mui/icons-material/Map";
import HomeIcon from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import AccountMenu from "./AccountMenu";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Paper } from "@mui/material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

export default function BottomNav() {
  return (
    // <Paper>
    //   <BottomNavigation>
    //     <BottomNavigationAction
    //       label="Home"
    //       href="/"
    //       value="home"
    //       icon={<HomeIcon />}
    //     />{" "}
    //     <BottomNavigationAction
    //       label="Events"
    //       href="/events"
    //       value="events"
    //       icon={<EventAvailableIcon />}
    //     />{" "}
    //     <BottomNavigationAction
    //       label="Map"
    //       href="/map"
    //       value="map"
    //       icon={<MapIcon />}
    //     />{" "}
    //     <BottomNavigationAction
    //       label="Resources"
    //       value="resources"
    //       href="/resources"
    //       icon={<InfoSharpIcon />}
    //     />
    //     <BottomNavigationAction
    //       label="User"
    //       value="user"
    //       icon={<AccountMenu />}
    //     />
    //   </BottomNavigation>
    // </Paper>

    <MDBNavbar fixed="bottom" light bgColor="light">
      <MDBContainer>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip> Home</Tooltip>}
        >
          <MDBNavbarBrand href="/" label="Home">
            <HomeIcon />
          </MDBNavbarBrand>
        </OverlayTrigger>

        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip>Events</Tooltip>}
        >
          <MDBNavbarBrand href="/events" label="Events">
            <EventAvailableIcon />
          </MDBNavbarBrand>
        </OverlayTrigger>

        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip>Map</Tooltip>}
        >
          <MDBNavbarBrand href="/map" label="Map">
            <MapIcon />
          </MDBNavbarBrand>
        </OverlayTrigger>

        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip>Resources</Tooltip>}
        >
          <MDBNavbarBrand href="/resources" label="Resources">
            <InfoSharpIcon />
          </MDBNavbarBrand>
        </OverlayTrigger>

        <OverlayTrigger
          key="top"
          placement="top"
          overlay={<Tooltip>User</Tooltip>}
        >
          <MDBNavbarBrand label="User">
            <AccountMenu />
          </MDBNavbarBrand>
        </OverlayTrigger>
      </MDBContainer>
    </MDBNavbar>
  );
}
