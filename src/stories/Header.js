import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import "./Header.css";
import { Button } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0x00ffffff-no-rj"
          alt="Celver Programmer"
        />
      </div>
      <div className="header__right">
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
      <div className="header__right--mobile">
        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;
