import { FunctionComponent } from "react";
import styles from "./Container.module.css";

const Container: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.staysNearbyParent}>
        <h3 className={styles.staysNearby}>Stays nearby:</h3>
        <h3 className={styles.torontoOntario}>Toronto Ontario</h3>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.bentoMenu1Wrapper}>
          <img
            className={styles.bentoMenu1Icon}
            alt=""
            src="/bento-menu1@2x.png"
          />
        </div>
        <div className={styles.mapWrapper}>
          <img className={styles.bentoMenu1Icon} alt="" src="/map@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Container;
