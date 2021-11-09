import React from "react";
import styles from "./style.module.scss";
const Navigation = () => {
  return (
    <nav>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.searchBar}>
        <form>
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={styles.icon}>
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-user"></i>
      </div>
    </nav>
  );
};
export default Navigation;
