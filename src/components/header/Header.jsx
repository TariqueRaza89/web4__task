import "./header.css";
import Logo from "../../assets/02_Black.svg";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const searchBarOpen = () => {
    setSearchOpen(true);
  };

  const closeSearchBar = () => {
    setSearchOpen(false);
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <img src={Logo} className="logo" alt="logo" />

            <ul className={open ? `nav__lists active` : `nav__lists`}>
              <li>
                <BsArrowRight className="close" onClick={closeMenu} />
              </li>
              <li>
                <Link to="/" className="menu__item" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="menu__item" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="menu__item" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="search">
              {searchOpen ? (
                <IoMdClose className="search__icon" onClick={closeSearchBar} />
              ) : (
                <BiSearch className="search__icon" onClick={searchBarOpen} />
              )}
              <FiMenu className="menu" onClick={openMenu} />
            </div>
          </nav>
        </div>
      </header>
      <div
        className={open ? "overlay active" : "overlay"}
        onClick={closeMenu}
      ></div>
      <div className="container">
        <div
          className={
            searchOpen
              ? "search__bar--contaner active"
              : "search__bar--contaner"
          }
        >
          <div className="search__bar">
            <input type="text" placeholder="Search" />
            <AiOutlineSearch className="search__bar--icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
