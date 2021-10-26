import React from "react";
import classes from "./style.module.scss";
const Navigation = () => {
  return (
    <nav>
      <div className={classes.logo}>LOGO</div>
      <div className={classes.searchBar}>
        <form>
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={classes.icon}>
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-user"></i>
      </div>
    </nav>
  );
};
export default Navigation;
