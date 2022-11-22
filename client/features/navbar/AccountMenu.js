import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../auth/authSlice";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BallotIcon from "@mui/icons-material/Ballot";
import LoginIcon from "@mui/icons-material/Login";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";

export default function AccountMenu() {
  const userId = useSelector((state) => state.auth.me.id);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/home");
  };
  return (
    <>
      <IconButton
        onClick={(evt) => setAnchorEl(evt.currentTarget)}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "accountMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <AccountBoxIcon />
      </IconButton>
      <Menu
        anchor={anchorEl}
        name="accountMenu"
        open={open}
        onClose={() => setAnchorEl(null)}
        onClick={() => setAnchorEl(null)}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {isLoggedIn ? (
          <>
            <MenuItem>
              <Avatar />
              <Link to={`/users/${userId}`}>Profile</Link>
            </MenuItem>
            <MenuItem>
              <FavoriteIcon />
              <Link to={`/users/${userId}/favorites`}>Favorites</Link>
            </MenuItem>

            {isAdmin ? (
              <>
                <MenuItem>
                  <PeopleAltIcon />
                  <Link to={`/users`}>Users</Link>
                </MenuItem>
                <MenuItem>
                  <BallotIcon />
                  <Link to={`/admin`}>Events</Link>
                </MenuItem>
              </>
            ) : null}

            <MenuItem onClick={logoutAndRedirectHome}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <Link to={"/home"}>Logout</Link>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem>
              <LoginIcon />
              <Link to={"/login"}>Login</Link>
            </MenuItem>
            <MenuItem>
              <EnhancedEncryptionIcon />
              <Link to={"/signup"}>Sign Up</Link>
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
}
