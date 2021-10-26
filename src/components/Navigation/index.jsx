import React from "react";
import classes from "./style.module.scss";
const Navigation = () => {
  return (
    <nav>
      <div className={classes.logo}></div>
      <div className={classes.searchBar}></div>
      <div className={classes.icon}>
        <i className="fas fa-shopping-cart"></i>
        <i class="fas fa-user"></i>
      </div>
    </nav>
  );
};
export default Navigation;
