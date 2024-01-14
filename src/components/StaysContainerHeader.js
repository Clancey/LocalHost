import styles from "./StaysContainerHeader.module.css";

const StaysContainerHeader = () => {
  return (
    <div className={styles.staysHeader}>
      <div className={styles.staysTitle}>
        <h3 className={styles.nearbyLabel}>Stays nearby:</h3>
        <h3 className={styles.locationLabel}>Toronto Ontario</h3>
      </div>
      <div className={styles.staysOptions}>
        <div className={styles.optionsToggle}>
          <img
            className={styles.menuMapIcons}
            alt=""
            src="/menu-map-icons.svg"
          />
        </div>
        <div className={styles.optionsToggle1}>
          <img className={styles.mapIcon} alt="" src="/map.svg" />
        </div>
      </div>
    </div>
  );
};

export default StaysContainerHeader;
