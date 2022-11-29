import React from "react";
import { useSelector } from "react-redux";
import { Paper, Box, CssBaseline } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpIcon from "@mui/icons-material/Help";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Tooltip from "react-bootstrap/Tooltip";
import { OverlayTrigger } from "react-bootstrap";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { AddCircle } from "@mui/icons-material";

export default function TopNav() {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  return (
    <Box sx={{ pb: 2 }}>
      <CssBaseline />
      <Paper
        sx={{
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#F8F7EF ",
        }}
        elevation={1}
      >
        <Navbar style={{ backgroundColor: "#F8F7EF" }}>
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
              <>
                <Navbar.Brand href="/calendar">
                  <OverlayTrigger
                    key="bottom"
                    placement="bottom"
                    overlay={<Tooltip>My Calendar</Tooltip>}
                  >
                    <CalendarMonthIcon sx={{ color: "black" }} />
                  </OverlayTrigger>
                </Navbar.Brand>
                <Navbar.Brand href="/add">
                  <OverlayTrigger
                    key="bottom"
                    placement="bottom"
                    overlay={<Tooltip>Add Event</Tooltip>}
                  >
                    <AddCircleIcon sx={{ color: "black" }} />
                  </OverlayTrigger>
                </Navbar.Brand>
              </>
            )}
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip>FAQ</Tooltip>}
            >
              <Navbar.Brand href="/faq">
                <HelpIcon sx={{ color: "black" }} />
              </Navbar.Brand>
            </OverlayTrigger>
          </Container>
        </Navbar>
      </Paper>
    </Box>
  );
}
