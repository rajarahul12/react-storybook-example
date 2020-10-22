import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import "./Header.css";
import Button from "../Components/Button";

function Header({ title, primary }) {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0x00ffffff-no-rj"
          alt="Celver Programmer"
        />
      </div>
      {title && <h2>{title}</h2>}
      <div className="header__right">
        <Button primary>Login</Button>
        <Button>Register</Button>
      </div>
      <div className="header__right--mobile">
        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;
