import { FunctionComponent } from "react";
import styles from "./ReviewCard.module.css";

type ReviewCardType = {
  similarChildrenNodes?: string;
  johnnyCash?: string;
  june2023?: string;
  similarChildrenNodes1?: string;
  michellesPlaceWasSoGreatA?: string;
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  similarChildrenNodes,
  johnnyCash,
  june2023,
  similarChildrenNodes1,
  michellesPlaceWasSoGreatA,
}) => {
  return (
    <div className={styles.reviewcard}>
      <div className={styles.similarChildrenNodes}>
        <div className={styles.similarChildrenNodes1}>
          <img
            className={styles.similarChildrenNodes2}
            loading="eager"
            alt=""
            src={similarChildrenNodes}
          />
          <div className={styles.similarChildrenNodes3}>
            <div className={styles.johnnyCash}>{johnnyCash}</div>
            <div className={styles.june2023}>{june2023}</div>
          </div>
        </div>
        <div className={styles.similarChildrenNodes4}>
          <div className={styles.similarChildrenNodes5}>
            {similarChildrenNodes1}
          </div>
          <img
            className={styles.similarChildrenNodes6}
            alt=""
            src="/vector-1.svg"
          />
        </div>
      </div>
      <div className={styles.michellesPlaceWas}>
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

export default ReviewCard;
