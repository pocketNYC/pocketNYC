import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../auth/authSlice";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Logout from "@mui/icons-material/Logout";
import BallotIcon from "@mui/icons-material/Ballot";
import LoginIcon from "@mui/icons-material/Login";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Avatar from "@mui/material/Avatar";

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
      <Avatar
        onClick={(evt) => setAnchorEl(evt.currentTarget)}
        size="small"
        aria-controls={open ? "accountMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{ backgroundColor: "#00933C" }}
      >
        <PersonIcon sx={{ color: "white" }} />
      </Avatar>

      <Menu
        anchorEl={anchorEl}
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
              top: 10,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(180%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "left", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        {isLoggedIn ? (
          <div>
            <MenuItem>
              <Link to={`/users/${userId}`}>
                <PersonIcon style={{ color: "black" }} />
                Profile
              </Link>
            </MenuItem>

            {isAdmin ? (
              <MenuItem>
                <Link to={`/admin`}>
                  <BallotIcon style={{ color: "black" }} />
                  Admin
                </Link>
              </MenuItem>
            ) : null}

            <MenuItem onClick={logoutAndRedirectHome}>
              <Link to={"/home"}>
                <Logout style={{ color: "black" }} />
                Logout
              </Link>
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem>
              <Link style={{ color: "black" }} to={"/login"}>
                <LoginIcon />
                Login
              </Link>
            </MenuItem>
            <MenuItem>
              <Link style={{ color: "black" }} to={"/signup"}>
                <LockOpenIcon />
                Sign Up
              </Link>
            </MenuItem>
          </div>
        )}
      </Menu>
    </>
  );
}
