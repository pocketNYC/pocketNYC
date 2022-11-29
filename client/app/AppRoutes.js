import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { me } from "./store";
import Home from "../features/home/Home";
import Events from "../features/events/Events";
import AddEvent from "../features/events/AddEvent";
import Admin from "../features/admin/Admin";
import EditUserProfile from "../features/users/EditUserAccountDetails";
import Error from "../features/error/Error";
import Login from "../features/auth/Login";
import Signup from "../features/auth/Signup";
import Resources from "../features/resources/Resources";
import SingleResource from "../features/resources/SingleResource";
import SingleUserProfile from "../features/users/SingleUserProfile";
import SingleEvent from "../features/events/SingleEvent";
import ConfirmationPage from "../features/events/ConfirmationPage";
import Faq from "../features/helpPage/HelpPage";
import UserCalendar from "../features/calendar/UserCalendar";
import Map from "../features/map/Map";
import LoadingScreen from "../features/loading/LoadingScreen";
import FavoriteResources from "../features/favorites/FavoriteResources";
import FavoriteEvents from "../features/favorites/FavoriteEvents";
import LaunchScreen from "../features/loading/LaunchScreen";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const userId = useSelector((state) => state.auth.me.id);
  const user = useSelector((state) => state.auth.me);
  const loading = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch();
  const [showLandingPage, setShowLandingPage] = useState(true);
  useEffect(() => {
    dispatch(me());
    const timer = setTimeout(() => {
      setShowLandingPage(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div>
        {showLandingPage && (
          <>
            <Routes>
              <Route
                path="/"
                element={showLandingPage ? <LaunchScreen /> : <Home />}
              />
            </Routes>
          </>
        )}
      </div>
      {loading && <LoadingScreen />}
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<SingleEvent />} />
          <Route
            path={`/users/${userId}/favoriteEvents`}
            element={<FavoriteEvents />}
          />
          <Route path="/add" element={<AddEvent />} />

          <Route
            path="/add/success"
            element={<ConfirmationPage user={user} />}
          />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:id" element={<SingleResource />} />

          <Route
            path={`/users/${userId}/favoriteResources`}
            element={<FavoriteResources />}
          />
          <Route path="/calendar" element={<UserCalendar />} />
          <Route
            path={`/users/${userId}`}
            element={<SingleUserProfile user={user} />}
          />
          <Route
            path={`/users/${user.id}/edit`}
            element={<EditUserProfile user={user} />}
          />
          <Route path="/faq" element={<Faq />} />
          <Route path="/map" element={<Map />} />

          {isAdmin && <Route path="/admin" element={<Admin />} />}

          <Route path="*" element={<Error />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={<Login name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<Signup name="signup" displayName="Sign Up" />}
          />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<SingleEvent />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:id" element={<SingleResource />} />
          <Route path="/map" element={<Map />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </div>
  );
};
export default AppRoutes;
