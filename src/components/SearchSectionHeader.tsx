import { FunctionComponent } from "react";
import styles from "./SearchSectionHeader.module.css";

const SearchSectionHeader: FunctionComponent = () => {
  return (
    <div className={styles.searchSectionHeader}>
      <div className={styles.topBar}>
        <h3 className={styles.staysNearby}>Stays nearby:</h3>
        <h3 className={styles.torontoOntario}>Toronto Ontario</h3>
      </div>
      <div className={styles.layoutSelection}>
        <div className={styles.dropdownMenu}>
          <img
            className={styles.bentoMenu1Icon}
            alt=""
            src="/bento-menu1.svg"
          />
        </div>
        <div className={styles.dropdownMenu1}>
          <img className={styles.mapIcon} alt="" src="/map.svg" />
        </div>
      </div>
    </div>
  );
};

export default SearchSectionHeader;
