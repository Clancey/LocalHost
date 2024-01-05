import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.mainContainer}>
      <div className={styles.headerFrame}>
        <div className={styles.headerContentFrame}>
          <img
            className={styles.brandLogoIcon}
            loading="eager"
            alt=""
            src="/logo.svg"
          />
          <nav className={styles.navigationLinks}>
            <div className={styles.navItems}>Home</div>
            <div className={styles.navItems}>Stays</div>
            <div className={styles.navItems2}>Become a host</div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
