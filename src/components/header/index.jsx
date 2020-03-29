import React from "react";

import imgSrc from "../../images/prof1.jpeg";
import Socials from "../socials";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.profileWrapper}>
        <img
          className={classes.profilePicture}
          src={imgSrc}
          alt="Isachard Rodriguez"
        />
      </div>
      <div className={classes.profileContent}>
        <h1>Isachard Rodriguez</h1>
        <h2>Software Engineer based in Portland, OR.</h2>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
