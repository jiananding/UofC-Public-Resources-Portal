import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./Component/listItem"
import './pageExercising.css';
import Title from "./Component/Title";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Title>Red Gym</Title>
            <div class="scheduleContainer MuiGrid-root">
              <div class="time start-800">8:00</div>
              <div class="time start-830">8:30</div>
              <div class="time start-900">9:00</div>
              <div class="time start-930">9:30</div>
              <div class="time start-1000">10:00</div>
              <div class="time start-1030">10:30</div>
              <div class="time start-1100">11:00</div>
              <div class="time start-1130">11:30</div>
              <div class="time start-1200">12:00</div>
              <div class="time start-1230">12:30</div>
              <div class="time start-1300">13:00</div>
              <div class="time start-1330">13:30</div>
              <div class="time start-1400">14:00</div>
              <div class="time start-1430">14:30</div>
              <div class="time start-1500">15:00</div>
              <div class="time start-1530">15:30</div>
              <div class="time start-1600">16:00</div>
              <div class="time start-1630">16:30</div>
              <div class="time start-1700">17:00</div>
              <div class="time start-1730">17:30</div>
              <div class="time start-1800">18:00</div>
              <div class="time start-1830">18:30</div>
              <div class="time start-1900">19:00</div>
              <div class="time start-1930">19:30</div>
              <div class="time start-2000">20:00</div>
              <div class="time start-2030">20:30</div>
              <div class="time start-2100">21:00</div>
              <div class="time start-2130">21:30</div>
              <div class="event stage-saturn start-800 end-930 length-4">Arrival and registration <span>Registration Area</span></div>
              <div class="event stage-earth start-1000 end-1000 length-4">Welcome <span>Earth Stage</span></div>
              <div class="event stage-earth start-1030 end-1030 length-4">Speaker One <span>Earth Stage</span></div>
              <div class="event stage-earth start-1100 end-1100 length-4">Speaker Two <span>Earth Stage</span></div>
              <div class="event stage-earth start-1130 end-1130 length-4">Speaker Three <span>Earth Stage</span></div>
              <div class="event stage-mercury start-1200 end-1600 length-1">Speaker Five <span>Mercury Stage</span></div>
              <div class="event stage-venus start-1200 end-1600 length-1">Speaker Six <span>Venus Stage</span></div>
              <div class="event stage-mars start-1200 end-1600 length-1">Speaker Seven <span>Mars Stage</span></div>
              <div class="event stage-saturn start-1200 end-1300 length-1">Lunch <span>Saturn Stage</span></div>
              <div class="event stage-earth start-1630 end-1630 length-4">Speaker Eigth <span>Earth Stage</span></div>
              <div class="event stage-earth start-1700 end-1700 length-4">Speaker Nine <span>Earth Stage</span></div>
              <div class="event stage-saturn start-1730 end-1730 length-4">Break <span>Saturn Stage</span></div>
              <div class="event stage-earth start-1800 end-1900 length-1">Speaker Ten <span>Earth Stage</span></div>
              <div class="event stage-mercury start-1800 end-1900 length-1">Speaker Eleven <span>Mercury Stage</span></div>
              <div class="event stage-jupiter start-1800 end-1900 length-2">Speaker Twelve <span>Jupiter Stage</span></div>
              <div class="event stage-venus start-1930 end-2130 length-2">Speaker Thirteen <span>Venus Stage</span></div>
              <div class="event stage-saturn start-1930 end-2130 length-2">Drinks <span>Saturn Stage</span></div>
            </div>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
