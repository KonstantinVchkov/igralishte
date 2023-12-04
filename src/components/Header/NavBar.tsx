import React, { useState } from "react";
import style from "./style.module.css";
import Image from "next/image";
import { INavbar } from "@/types/ProjectTypes";
import Link from "next/link";
import HamburgerMenu from "./hamburgerMenu";
import SearchFilter from "./SearchFilter";
import LogoComponent from "./logo";

const NavBar = ({ hambMenu, searchFilter, toggleHamMenu }: INavbar) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleToggleHamMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleHamMenu();
  };
  const searchProducts = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
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

      <div className={style.hambMenu} onClick={handleToggleHamMenu}>
        <Image src={hambMenu} alt="Hamburger Menu" width={400} height={30} />
      </div>

      <LogoComponent />

      <div className={style.searchIcon} onClick={toggleSearch}>
        {" "}
        <Image src={searchFilter} alt="searchIcon" width={150} height={130} />
      </div>

      <SearchFilter
        show={showSearch}
        handleClose={() => setShowSearch(false)}
      />
    </div>
  );
};

export default NavBar;
