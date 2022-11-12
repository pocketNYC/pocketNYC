import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { me } from "./store";
import Home from "../features/home/Home";
import Users from "../features/users/Users";
import Events from "../features/events/Events";
import AddEvent from "../features/events/AddEvent";
import Admin from "../features/admin/Admin";
import Error from "../features/error/Error";
import Login from "../features/auth/Login";
import Signup from "../features/auth/Signup";
import AllResources from "../features/resources/AllResources";
import SingleResource from "../features/resources/SingleResource";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/add" element={<AddEvent />} />
          <Route path="/resources" element={<AllResources />} />
          <Route path="/resources/:id" element={<SingleResource />} />

          {isAdmin && (
            <>
              <Route path="/events/add" element={<AddEvent />} />
              <Route path="/users" element={<Users />} />
              <Route path="/admin" element={<Admin />} />
            </>
          )}
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<Login name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<Login name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<Signup name="signup" displayName="Sign Up" />}
          />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<AllResources />} />
          <Route path="/resources/:id" element={<SingleResource />} />
          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
