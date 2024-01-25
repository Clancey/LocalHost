import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <header className={styles.appHeaderOldWrapper}>
      <div className={styles.appHeaderOld}>
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
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
