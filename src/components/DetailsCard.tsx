import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DetailsCard.module.css";

type DetailsCardType = {
  rectangleFrame?: string;
  dedicatedWorkspace?: string;
  aPrivateRoomEquippedWithW?: string;

  /** Style props */
  propMaxWidth?: CSSProperties["maxWidth"];
};

const DetailsCard: FunctionComponent<DetailsCardType> = ({
  rectangleFrame,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
  propMaxWidth,
}) => {
  const detailsCardStyle: CSSProperties = useMemo(() => {
    return {
      maxWidth: propMaxWidth,
    };
  }, [propMaxWidth]);

  return (
    <div className={styles.detailscard} style={detailsCardStyle}>
      <img
        className={styles.rectangleFrameIcon}
        loading="eager"
        alt=""
        src={rectangleFrame}
      />
      <div className={styles.dedicatedWorkspaceParent}>
        <div className={styles.dedicatedWorkspace}>{dedicatedWorkspace}</div>
        <div className={styles.aPrivateRoom}>{aPrivateRoomEquippedWithW}</div>
      </div>
    </div>
  );
};

export default DetailsCard;
