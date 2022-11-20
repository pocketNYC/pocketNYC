import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { fetchAllEvents } from "./eventsSlice";
import { me } from "../auth/authSlice";
import { addToFavEvents } from "../favorites/favoriteEventsSlice";
import { addToCalendar } from "../calendar/calendarSlice";
import { useNavigate } from "react-router-dom";
import { Button, Tooltip } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Paper from "@mui/material/Paper";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Events() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchAllEvents());
    dispatch(me());
  }, []);

  const sortedApprovedEvents = [...events]
    .sort((a, b) => {
      return new Date(a.start) - new Date(b.start);
    })
    .filter((event) => {
      if (event.status === "approved") {
        return event;
      }
    })
    .filter((a) => new Date(a.start) - new Date() > 0);

  const addFavButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToFavEvents(id));
  };

  const addCalButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToCalendar(id));
  };

  const Card = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <h1 className="underline">List of Events</h1>
      <Grid
        container
        marginLeft={2.5}
        columnSpacing={2}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {sortedApprovedEvents?.map(({ id, image, title, start, tag }) => (
          <Grid item xs={2} sm={4} md={4} key={id}>
            <Card sx={{ maxWidth: 400, minHeight: 400 }}>
              <CardMedia
                component="img"
                height="194"
                image={image}
                onClick={() => navigate(`/events/${id}`)}
              />
              <CardHeader title={title} />
              <CardContent sx={{ padding: 0 }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold" }}
                  color="text.secondary"
                >
                  {moment(start).format("dddd, MMMM Do, YYYY")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tags: {tag.join(", ")}
                </Typography>
              </CardContent>
              {/* <img
            src={image}
            style={{ width: "800px", height: "500px", cursor: "pointer" }}
            onClick={() => navigate(`/events/${id}`)}
          /> */}
              {/* <h3 className="underline">{title}</h3> */}
              {isLoggedIn ? (
                <CardActions>
                  <Tooltip title="Add to Favorites">
                    <IconButton
                      onClick={(ev) => addFavButton(ev, id)}
                      aria-label="add to favorites"
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Add to Calendar">
                    <IconButton
                      aria-label="add to calendar"
                      onClick={(ev) => addCalButton(ev, id)}
                    >
                      <CalendarMonthIcon />
                    </IconButton>
                  </Tooltip>
                  <Button
                    size="small"
                    onClick={() => navigate(`/events/${id}`)}
                  >
                    More Info
                  </Button>
                </CardActions>
              ) : // <Button
              //   variant="outlined"
              //   onClick={(ev) => addButton(ev, id)}
              //   color="error"
              //   startIcon={<FavoriteBorderOutlinedIcon />}
              // >
              //   Add to Favorites
              // </Button>
              null}
            </Card>
          </Grid>
        ))}
        <Tooltip title="Scroll to Top">
          <Button
            className="scroll"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            variant="contained"
            size="small"
            style={{
              position: "fixed",
              borderRadius: "50%",
              padding: "1rem 1rem",
              bottom: "40px",
              right: "40px",
              textAlign: "center",
            }}
          >
            <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
          </Button>
        </Tooltip>
      </Grid>
    </div>
  );
}
