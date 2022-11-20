import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { fetchAllEvents } from "./eventsSlice";
import { me } from "../auth/authSlice";
import { addToFavEvents } from "../favorites/favoriteEventsSlice";
import { useNavigate } from "react-router-dom";
import { Button, Tooltip } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import ReactPaginate from "react-paginate";
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
      return new Date(a.date) - new Date(b.date);
    })
    .filter((event) => {
      if (event.status === "approved") {
        return event;
      }
    })
    .filter((a) => new Date(a.date) - new Date() > 0);

  const addButton = (ev, id) => {
    ev.preventDefault();
    dispatch(addToFavEvents(id));
  };

  const Card = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box>
      <Grid
        container
        columnSpacing={2}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {/* <h1 className="underline">List of Events</h1> */}

        {sortedApprovedEvents?.map(
          ({ id, image, title, date, description }) => (
            <Grid item xs={2} sm={4} md={4} key={id}>
              <Card sx={{ maxWidth: 400 }}>
                <CardHeader
                  title={title}
                  subheader={moment(date).format("dddd, MMMM Do, YYYY")}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={image}
                  onClick={() => navigate(`/events/${id}`)}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {description}
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
                    <IconButton
                      onClick={(ev) => addButton(ev, id)}
                      aria-label="add to favorites"
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="add to calendar">
                      <CalendarMonthIcon />
                    </IconButton>
                    <Button size="small">More Info</Button>
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
                {/* <h4>Date: {moment(date).format("dddd, MMMM Do, YYYY")}</h4> */}
              </Card>
            </Grid>
          )
        )}
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
    </Box>
  );
}
