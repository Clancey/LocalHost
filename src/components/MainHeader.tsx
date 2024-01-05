import { FunctionComponent } from "react";
import styles from "./MainHeader.module.css";

const MainHeader: FunctionComponent = () => {
  return (
    <header className={styles.mainFrame}>
      <div className={styles.appHeaderOldInstance}>
        <div className={styles.headerContentFrame}>
          <img
            className={styles.logoInstanceIcon}
            loading="eager"
            alt=""
            src="/logo.svg"
          />
          <div className={styles.navLinksFrame}>
            <div className={styles.navItems}>Home</div>
            <div className={styles.navItems}>Stays</div>
            <div className={styles.navItems2}>Become a host</div>
          </div>
          <div className={styles.loginSectionFrame}>
            <img
              className={styles.alertsFrameIcon}
              loading="eager"
              alt=""
              src="/alerts.svg"
            />
            <img
              className={styles.avatarEllipseIcon}
              loading="eager"
              alt=""
              src="/avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
