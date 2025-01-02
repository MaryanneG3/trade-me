import { useState } from "react";
import styles from "../navlinks/NavLinks.module.css";
import { NavLink } from "react-router-dom";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu";

function NavbarNavlinks() {
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
    <div className={styles.navbarlinksContainer}>
      <div className={styles.leftSection}>
        <DropdownMenu
          menu="browseMarketPlace"
          title="Browse Marketplace"
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

        <NavLink to="#stores-page" className={styles.navlink}>
          Stores
        </NavLink>

        <NavLink to="#deals-page" className={styles.navlink}>
          Deals
        </NavLink>

        <NavLink to="#list-an-item-page" className={styles.navlink}>
          Book a Courier
        </NavLink>
      </div>

      <div className={styles.rightSection}>
        <NavLink to="#list-an-item-page" className={styles.navlink}>
          List an Item
        </NavLink>
      </div>
    </div>
  );
}

export default NavbarNavlinks;
