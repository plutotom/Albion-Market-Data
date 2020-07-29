import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import MiniDrawerSide from "../SidBarNav/MiniDrawerSide";
import clsx from "clsx";
import TablePage from "../pages/TablePage";
import AbuseBlackMarket from "../pages/AbuseBlackMarket";
function MainRoutes(props) {
  const [open, setOpen] = React.useState(false);
  const { classes } = props;

  useEffect(() => {
    //this is getting state from server to set up the settings that this user
  }, []);

  return (
    <Router>
      <MiniDrawerSide openHandeler={setOpen} openState={open} />
      <div // moving content over when side bar open.
        className={clsx({
          [classes.open]: open,
          [classes.close]: !open,
        })}
      >
        <Route exact path="/" component={TablePage} />
        <Route exact path="/states" component={AbuseBlackMarket} />
        {/* <Route exact path="/profile" component={Profile} />
        <Route exact path="/settings" component={Settings} /> */}
      </div>
    </Router>
  );
}

export default withStyles(styles)(MainRoutes);
