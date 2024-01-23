import { FunctionComponent } from "react";
import styles from "./ReviewCard.module.css";

type ReviewCardType = {
  ellipseShape?: string;
  johnnyCash?: string;
  june2023?: string;
  reviewCardGuestCount?: string;
  nightVector?: string;
  michellesPlaceWasSoGreatA?: string;
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  ellipseShape,
  johnnyCash,
  june2023,
  reviewCardGuestCount,
  nightVector,
  michellesPlaceWasSoGreatA,
}) => {
  return (
    <div className={styles.reviewcard}>
      <div className={styles.bridlepathEstate}>
        <div className={styles.reviewCardContent}>
          <img
            className={styles.ellipseShapeIcon}
            loading="eager"
            alt=""
            src={ellipseShape}
          />
          <div className={styles.brightwoodsEstate}>
            <div className={styles.johnnyCash}>{johnnyCash}</div>
            <div className={styles.june2023}>{june2023}</div>
          </div>
        </div>
        <div className={styles.reviewCardHeartIcon}>
          <div className={styles.reviewCardGuest}>{reviewCardGuestCount}</div>
          <img className={styles.nightVectorIcon} alt="" src={nightVector} />
        </div>
      </div>
      <div className={styles.michellesPlaceWas}>
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

export default ReviewCard;
