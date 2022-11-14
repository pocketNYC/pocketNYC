import React from "react";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const userId = useSelector((state) => state.auth.me.id)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };


  return (
    <div>
      <h1>PocketNYC</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/events/add">Add Event</Link>
            <Link to="/resources"> Resources</Link>
            <Link to={`/users/${userId}`} >My Profile</Link>
            {isAdmin && (
              <>
                <Link to="/users">Users</Link>
              </>
            )}
            <Button
              variant="primary"
              type="submit"
              onClick={logoutAndRedirectHome}
            >
              Log out
            </Button>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/events">Events</Link>
            <Link to="/resources"> Resources</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
