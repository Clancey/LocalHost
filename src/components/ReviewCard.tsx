import { FunctionComponent } from "react";
import styles from "./ReviewCard.module.css";

type ReviewCardType = {
  ellipse12?: string;
  johnnyCash?: string;
  june2023?: string;
  prop?: string;
  michellesPlaceWasSoGreatA?: string;
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  ellipse12,
  johnnyCash,
  june2023,
  prop,
  michellesPlaceWasSoGreatA,
}) => {
  return (
    <div className={styles.reviewcard}>
      <div className={styles.ellipseShape}>
        <div className={styles.reviewerNamesParent}>
          <img
            className={styles.reviewerNamesIcon}
            loading="eager"
            alt=""
            src={ellipse12}
          />
          <div className={styles.dateInfo}>
            <div className={styles.johnnyCash}>{johnnyCash}</div>
            <div className={styles.june2023}>{june2023}</div>
          </div>
        </div>
        <div className={styles.similarStaysSec}>
          <div className={styles.stayCardFrame}>{prop}</div>
          <img className={styles.heartIconShape} alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className={styles.michellesPlaceWas}>
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

export default ReviewCard;
