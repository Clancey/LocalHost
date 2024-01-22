import { FunctionComponent } from "react";
import styles from "./StayCard.module.css";

type StayCardType = {
  vector?: string;
  brightwoodsEstate?: string;
  bridlepathOntarioCanada?: string;
  user1?: string;
};

const StayCard: FunctionComponent<StayCardType> = ({
  vector,
  brightwoodsEstate,
  bridlepathOntarioCanada,
  user1,
}) => {
  return (
    <div className={styles.staycard}>
      <div className={styles.brightwoodsEstate}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src={vector} />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className={styles.forestvilleCottages}>
        <div className={styles.location}>
          <div className={styles.vector}>
            <div className={styles.brightwoodsEstate1}>{brightwoodsEstate}</div>
            <div className={styles.bridlepathOntarioCanada}>
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className={styles.vectorGroup}>
            <div className={styles.vector1}>4.8</div>
            <img className={styles.userIcon} alt="" src={user1} />
          </div>
        </div>
        <div className={styles.reviews}>
          <div className={styles.helpCentre}>
            <div className={styles.airCover}>$502</div>
            <div className={styles.night}>/night</div>
          </div>
          <img
            className={styles.supportingpeoplewithdisabilitiIcon}
            loading="eager"
            alt=""
            src="/vector-11.svg"
          />
          <div className={styles.canceloptions}>
            <img
              className={styles.userIcon1}
              loading="eager"
              alt=""
              src="/user.svg"
            />
            <div className={styles.guests}>2 guests</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
