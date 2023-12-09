import React, { useState } from "react";
import NavBar from "./NavBar";
import HamburgerMenu from "./hamburgerMenu";
import style from "./style.module.css";
import AnnouncementBar from "./AnnouncementBar";
import { useRouter } from "next/router";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleHamMenu = () => {
    setOpenMenu(!openMenu);
  };
  const router = useRouter();
  const { pathname } = router;
  const showOnRoute = "/";
  const showAnouncementBar = showOnRoute.includes(pathname);

  return (
    <div className={style.Header}>
      <NavBar
        hambMenu={"/images/icons/hamburger-menu.png"}
        searchFilter={"/images/icons/navSearchIcon.png"}
        toggleHamMenu={toggleHamMenu}
      />
      <div className={`${style.transition}`}>
        <HamburgerMenu open={openMenu} toggleHamMenu={toggleHamMenu} />
      </div>
      <div>
        {showAnouncementBar && (
          <AnnouncementBar
            newColl={"Нова Колекција"}
            vintageColl={"Vintage - Kolekcija"}
            discount={"Попусти"}
            img={"/images/icons/star-icon.png"}
          />
        )}{" "}
      </div>
      
    </div>
  );
};

export default Header;
