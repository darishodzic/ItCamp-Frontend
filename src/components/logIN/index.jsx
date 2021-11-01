import React from "react";
import classes from "./style.module.scss";

const LogIn = () => {
  return (
    <div className={classes.logIn}>
      <div className={classes.naslov}>
        <h1>Log in</h1>
      </div>
      <div className={classes.logInWith}>
        <button className={classes.logwith}>
          <p>Log in with Google</p>
        </button>
        <button className={classes.logwith}>
          <p>Log in with Facebook</p>
        </button>
      </div>
      <div className={classes.or}>
        <h2>- OR -</h2>
      </div>
      <form>
        <input
          type="text"
          placeholder="E-mail address"
          name="email"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
        />
        <div className="button">
          <input type="submit" value="Log in" />
        </div>
      </form>
    </div>
  );
};

export default LogIn;
