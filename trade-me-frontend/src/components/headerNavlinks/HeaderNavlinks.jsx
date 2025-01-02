import styles from "../navlinks/NavLinks.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faHeart,
  faPen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "@fontsource/roboto";

const HeaderNavlinks = () => {
  return (
    <div className={styles.headerlinksContainer}>
      <NavLink to="#watchlist-page" className={styles.navlink}>
        <FontAwesomeIcon icon={faBasketShopping} className={styles.icon} />
        <p>Watchlist</p>
      </NavLink>

      <NavLink to="#favorites-page" className={styles.navlink}>
        <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        <p>Favorites</p>
      </NavLink>

      <NavLink to="#start-a-listing-page" className={styles.navlink}>
        <FontAwesomeIcon icon={faPen} className={styles.icon} />
        <p>Start a Listing</p>
      </NavLink>

      <NavLink to="#my-trade-me-page" className={styles.navlink}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <p>My Trade Me</p>
      </NavLink>
    </div>
  );
};

export default HeaderNavlinks;
