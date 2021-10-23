import React from "react";
import classes from "./style.module.scss";
const Navigation = () => {
  return (
    <nav>
      <div className={classes.logo}></div>
      <div className={classes.searchBar}></div>
      <div className={classes.icon}></div>
    </nav>
  );
};
export default Navigation;
