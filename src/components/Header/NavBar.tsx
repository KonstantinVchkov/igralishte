import React, { useState } from "react";
import style from "./style.module.css";
import Image from "next/image";
import { INavbar } from "@/types/GlobalTypes";
import Link from "next/link";
import HamburgerMenu from "./hamburgerMenu";
import SearchFilter from "./SearchFilter";
import LogoComponent from "./logo";

const NavBar = ({ hambMenu, searchFilter, toggleHamMenu }: INavbar) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // const toggleHamMenu = (e:React.FormEvent) => {
  //   e.stopPropagation()
  //   console.log("Toggling menu: current state is", openMenu); // Debug log
  //   setOpenMenu(!openMenu);
  // };
  const handleToggleHamMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleHamMenu();
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className={`${style.NavBar}`}>
      <HamburgerMenu
        open={openMenu}
        toggleHamMenu={() => {
          toggleHamMenu();
        }}
      />

      <div className="hamMenu" onClick={handleToggleHamMenu}>
        <Image src={hambMenu} alt="Hamburger Menu" width={50} height={30} />
      </div>

      <LogoComponent />

      <div className="searchIcon" onClick={toggleSearch}>
        {" "}
        {/* Changed this line */}
        <Image src={searchFilter} alt="searchIcon" width={50} height={30} />
      </div>

      <SearchFilter
        show={showSearch}
        handleClose={() => setShowSearch(false)}
      />
    </div>
  );
};

export default NavBar;
