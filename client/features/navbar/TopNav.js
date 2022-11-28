import React from "react";
import { useSelector } from "react-redux";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpIcon from "@mui/icons-material/Help";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Tooltip from "react-bootstrap/Tooltip";
import { OverlayTrigger } from "react-bootstrap";

export default function TopNav() {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  return (
    <Navbar style={{ backgroundColor: "black" }}>
      <Container>
        <Navbar.Brand href="/" className="position-absolute start-0">
          <img
            src="LogoForNav.png"
            alt="PocketNYC logo"
            width="auto"
            height="55"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Container>
      <Container className="justify-content-end">
        {isLoggedIn && (
          <Navbar.Brand href="/calendar">
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip>My Calendar</Tooltip>}
            >
              <CalendarMonthIcon sx={{ color: "white" }} />
            </OverlayTrigger>
          </Navbar.Brand>
        )}
        <OverlayTrigger
          key="bottom"
          placement="bottom"
          overlay={<Tooltip>FAQ</Tooltip>}
        >
          <Navbar.Brand href="/faq">
            <HelpIcon sx={{ color: "white" }} />
          </Navbar.Brand>
        </OverlayTrigger>
      </Container>
    </Navbar>
  );
}
