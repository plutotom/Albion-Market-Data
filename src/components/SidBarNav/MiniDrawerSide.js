import React from "react";
import { Link } from "react-router-dom";

// icons: https://material-ui.com/components/material-icons/
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import BallotIcon from "@material-ui/icons/Ballot";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// material-ui: https://material-ui.com/
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

export default function MiniDrawerSide(props) {
  const [Open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={clsx(classes.drawer, {
          [classes.open]: Open,
          [classes.close]: !Open,
        })}
        variant="permanent"
        classes={{
          paper: clsx(classes.drawer, {
            [classes.open]: Open,
            [classes.close]: !Open,
          }),
        }}
      >
        <div className={classes.drawerContainer}>
          <List>
            <ListItem style={{ backgroundColor: "#d9833c" }} key="things">
              <ListItemIcon>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => {
                    props.openHandeler(!props.openState);
                    setOpen(!Open);
                  }}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </ListItemIcon>
            </ListItem>
            <Link to="/">
              <ListItem button key="home">
                <ListItemIcon>
                  <HomeIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText className={classes.itemText} primary="Home" />
              </ListItem>
            </Link>
            <Link to="/states">
              <ListItem button key="States">
                <ListItemIcon>
                  <BallotIcon className={classes.icons} />
                </ListItemIcon>
                <ListItemText className={classes.itemText} primary="States" />
              </ListItem>
            </Link>
          </List>
          <div className={classes.bottom_items}>
            <Divider className={classes.devider} />
            <List>
              <Link to="/profile">
                <ListItem button key="Profile">
                  <ListItemIcon>
                    <PersonIcon className={classes.icons} />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.itemText}
                    primary="Profile"
                  />
                </ListItem>
              </Link>
              <Link to="/Settings">
                <ListItem button key="Settings">
                  <ListItemIcon>
                    <SettingsIcon className={classes.icons} />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.itemText}
                    primary="Settings"
                  />
                </ListItem>
              </Link>
            </List>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "fixed",
    height: "100%",
  },
  link: {
    underlineNone: "none",
    underlineHover: "none",
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: "#282828",
  },
  drawerPaper: {
    width: 240,
    overflow: "hidden",
  },
  drawerContainer: {
    overflow: "hidden",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  bottom_items: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  icons: {
    color: "#d9833c",
  },
  itemText: {
    color: "gray",
  },
  close: {
    width: "60px",
    overflow: "hidden",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  open: {
    width: "240px",
    overflow: "hidden",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  devider: {
    backgroundColor: "gray",
  },
}));
