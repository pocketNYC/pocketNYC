import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@mui/material/Avatar";
import MapIcon from "@mui/icons-material/Map";
import HomeIcon from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import AccountMenu from "./AccountMenu";

import {
  BottomNavigation,
  Paper,
  BottomNavigationAction,
  Box,
  CssBaseline,
} from "@mui/material";

export default function BottomNav() {
  // const useStyles = makeStyles((theme) => ({
  //   avatar: {
  //     backgroundColor: theme.palette.grey[50],
  //     border: `1px solid ${theme.palette.info.main}`,
  //     color: theme.palette.info.main,
  //   },
  // }));
  // const classes = useStyles();

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            href="/home"
            label="Home"
            icon={
              <Avatar>
                <HomeIcon />
              </Avatar>
            }
          />
          <BottomNavigationAction
            label="Events"
            href="/events"
            icon={<EventAvailableIcon />}
          />
          <BottomNavigationAction label="Map" href="/map" icon={<MapIcon />} />
          <BottomNavigationAction
            label="Resources"
            href="/resources"
            icon={<InfoSharpIcon />}
          />
          <BottomNavigationAction label="User" icon={<AccountMenu />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
