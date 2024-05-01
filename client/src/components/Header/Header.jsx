import React, { useState } from "react";
import "./Header.css";
import "../../index.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import useAuthCheck from "../../hooks/useAuthCheck.jsx"
import AddPropertyModel from "../AddPropertyModel/AddPropertyModel";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const [modelOpened, setModelOpened] = useState(false);

  const { validateLogin } = useAuthCheck();

  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModelOpened(true);
    }
  };

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 768) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="logo.png" alt="logo" width={100} />
        </Link>
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/properties">Properties</NavLink>

            <a href="mailto:yogeshbommidi@gmail.com">Contact Us</a>

            {/**property */}
            <div onClick={handleAddPropertyClick}>Add Property</div>
            <AddPropertyModel opened={modelOpened} setOpened={setModelOpened} />

            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                LogIn
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
};

export default Header;
