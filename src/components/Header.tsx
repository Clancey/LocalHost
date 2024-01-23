import { FunctionComponent } from "react";
import styles from "./Header.module.css";

type HeaderType = {
  logo?: string;
  alerts?: string;
  avatar?: string;
};

const Header: FunctionComponent<HeaderType> = ({ logo, alerts, avatar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img className={styles.logoIcon} loading="eager" alt="" src={logo} />
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
            src={alerts}
          />
          <img
            className={styles.avatarIcon}
            loading="eager"
            alt=""
            src={avatar}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
