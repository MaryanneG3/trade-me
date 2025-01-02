import { NavLink } from "react-router-dom";
import NavLinks from "../../components/navlinks/NavLinks";
import styles from "./Header.module.css";
import logo from "../../../public/images/logo/Trade-me-logo.png";
import DropdownMenu from "../../components/navbarNavlinks/DropdownMenu";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [dropdowns, setDropdowns] = useState({
    browseMarketPlace: false,
  });

  const toggleMenu = (menu) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };
  return (
    <div className={styles.headerContainer}>
      {/* // clicking on the logo will redirect to the homepage */}
      <div className={styles.leftSection}>
        <NavLink to="/" className={styles.logoContainer}>
          <img src={logo} className={styles.logoImg} />
        </NavLink>

        <DropdownMenu
          menu="browseMarketPlace"
          title="Browse"
          icon={faAngleDown}
          dropdowns={dropdowns}
          toggleMenu={toggleMenu}
          links={[
            {
              to: "#antiques-and-collectables-page",
              label: "Antiques and Collectables",
            },
            { to: "#art-page", label: "Art" },
            { to: "#baby-gear-page", label: "Baby gear" },
            { to: "#books", label: "Books" },
            { to: "#bilding-and-renovation", label: "Building and Renovation" },
            {
              to: "#biz-farm-and-industry",
              label: "Business, Farming and Industry",
            },
            { to: "#clothing-and-fashion-page", label: "Clothing and Fashion" },
          ]}
        />

        <div className={styles.searchBarContainer}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
          <label>Search</label>

          <input type="text" />
        </div>
      </div>

      {/* header navlinks will vary for specific pages - use variants */}
      <div className={styles.rightSection}>
        <div className={styles.navlinks}>
          <NavLinks variant="header" />
        </div>
      </div>
    </div>
  );
}

export default Header;
