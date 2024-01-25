import { FunctionComponent } from "react";
import styles from "./DetailsCard.module.css";

type DetailsCardType = {
  frame65?: string;
  dedicatedWorkspace?: string;
  aPrivateRoomEquippedWithW?: string;
};

const DetailsCard: FunctionComponent<DetailsCardType> = ({
  frame65,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
}) => {
  return (
    <div className={styles.detailscard}>
      <img
        className={styles.amenitiesSectionIcon}
        loading="eager"
        alt=""
        src={frame65}
      />
      <div className={styles.lakeside}>
        <div className={styles.dedicatedWorkspace}>{dedicatedWorkspace}</div>
        <div className={styles.aPrivateRoom}>{aPrivateRoomEquippedWithW}</div>
      </div>
    </div>
  );
};

export default DetailsCard;
