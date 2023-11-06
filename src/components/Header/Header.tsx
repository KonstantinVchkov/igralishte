import React, { useState } from "react";
import NavBar from "./NavBar";
import HamburgerMenu from "./hamburgerMenu";
import style from "./style.module.css"
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleHamMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <NavBar
        hambMenu={"/images/icons/hamburger-menu.png"}
        searchFilter={"/images/icons/navSearchIcon.png"}
        toggleHamMenu={toggleHamMenu}
      />
      <div className={`${style.transition}`}>
        <HamburgerMenu open={openMenu} toggleHamMenu={toggleHamMenu} />
      </div>
    </div>
  );
};

export default Header;
