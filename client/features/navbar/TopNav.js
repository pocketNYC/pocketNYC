import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth/authSlice";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpIcon from "@mui/icons-material/Help";

export default function TopNav() {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/home");
  };
  return (
    <>
      <MDBNavbar fixed="top" light bgColor="light">
        <MDBContainer fluid>
          <a className="navbar-brand" href="/">
            <img
              src="
          https://i.imgur.com/0wLXpHh.png"
              alt="PocketNYC logo"
              width="65"
              height="70"
            />
            PocketNYC
          </a>

          {isLoggedIn ? (
            <MDBNavbarBrand href="/calendar">
              <CalendarMonthIcon />
            </MDBNavbarBrand>
          ) : null}

          <MDBNavbarBrand href="/faq">
            <HelpIcon />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
