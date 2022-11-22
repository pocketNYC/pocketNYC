import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth/authSlice";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  const [anchor, setAnchor] = useState(null);
  const userId = useSelector((state) => state.auth.me.id);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const open = Boolean(anchor);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/home");
  };
  return (
    <>
      <IconButton
        onClick={(evt) => setAnchor(evt.currentTarget)}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "accountMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <AccountBoxIcon />
      </IconButton>
      <Menu
        anchor={anchor}
        name="accountMenu"
        open={open}
        onClose={() => setAnchor(null)}
        onClick={() => setAnchor(null)}
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
                  <Link to={`/users`}>Users</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/admin`}>Events</Link>
                </MenuItem>
              </>
            ) : null}

            <MenuItem onClick={logoutAndRedirectHome}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <Link to={`/home`}>Logout</Link>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem>
              <Link to={`/login`}>Login</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/signup`}>Sign Up</Link>
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
}
