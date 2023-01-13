import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import MapIcon from "@mui/icons-material/Map";
import HomeIcon from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AccountMenu from "./AccountMenu";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import {
  BottomNavigation,
  Paper,
  BottomNavigationAction,
  Box,
  CssBaseline,
} from "@mui/material";

export default function BottomNav() {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  return (
    <Box sx={{ pb: 5 }}>
      <CssBaseline />
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          pb: 2,
          alignment: "center",
          backgroundColor: "#F8F7EF ",
        }}
        elevation={3}
      >
        <BottomNavigation
          sx={{ marginTop: 2, backgroundColor: "#F8F7EF" }}
          showLabels
        >
          <BottomNavigationAction
            href="/home"
            label="Home"
            sx={{ color: "black", padding: "8px" }}
            icon={
              <>
                <Avatar sx={{ backgroundColor: "#0039A6" }}>
                  <HomeIcon />
                </Avatar>
              </>
            }
          />
          <BottomNavigationAction
            label="Events"
            href="/events"
            sx={{ color: "black", padding: "8px" }}
            icon={
              <>
                <Avatar sx={{ backgroundColor: "#FF6319" }}>
                  <EventAvailableIcon />
                </Avatar>
              </>
            }
          />
          <BottomNavigationAction
            label="Map"
            href="/map"
            sx={{ color: "black", padding: "8px" }}
            icon={
              <>
                <Avatar sx={{ backgroundColor: "#808183" }}>
                  <MapIcon />
                </Avatar>
              </>
            }
          />
          <BottomNavigationAction
            label="Resources"
            href="/resources"
            sx={{ color: "black", padding: "8px" }}
            icon={
              <>
                <Avatar sx={{ backgroundColor: "#EE352E" }}>
                  <Diversity1Icon />
                </Avatar>
              </>
            }
          />

          {isLoggedIn ? (
            <BottomNavigationAction
              sx={{ color: "black", padding: "8px" }}
              label="User"
              icon={<AccountMenu />}
            />
          ) : (
            <BottomNavigationAction
              label="User"
              href="/login"
              sx={{ color: "black", padding: "8px" }}
              icon={
                <Avatar sx={{ backgroundColor: "#00933C" }}>
                  <PersonIcon sx={{ color: "white" }} />{" "}
                </Avatar>
              }
            />
          )}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
