import { FunctionComponent } from "react";
import styles from "./DetailsCard.module.css";

type DetailsCardType = {
  amenitiesSection?: string;
  dedicatedWorkspace?: string;
  aPrivateRoomEquippedWithW?: string;
};

const DetailsCard: FunctionComponent<DetailsCardType> = ({
  amenitiesSection,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
}) => {
  return (
    <div className={styles.detailscard}>
      <img
        className={styles.amenitiesSectionIcon}
        loading="eager"
        alt=""
        src={amenitiesSection}
      />
      <div className={styles.mdilake}>
        <div className={styles.dedicatedWorkspace}>{dedicatedWorkspace}</div>
        <div className={styles.aPrivateRoom}>{aPrivateRoomEquippedWithW}</div>
      </div>
    </div>
  );
};

export default DetailsCard;
