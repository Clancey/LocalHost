import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          className={styles.logoIcon}
          loading="eager"
          alt=""
          src="/logo.svg"
        />
        <div className={styles.navLinks}>
          <div className={styles.home}>Home</div>
          <div className={styles.stays}>Stays</div>
          <div className={styles.becomeAHost}>Become a host</div>
        </div>
        <div className={styles.loginSection}>
          <img
            className={styles.alertsIcon}
            loading="eager"
            alt=""
            src="/alerts.svg"
          />
          <img
            className={styles.avatarIcon}
            loading="eager"
            alt=""
            src="/avatar@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
