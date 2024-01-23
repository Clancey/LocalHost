import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StayCard.module.css";

type StayCardType = {
  vector?: string;
  heartIcon?: string;
  brightwoodsEstate?: string;
  bridlepathOntarioCanada?: string;
  michellePlaceCard?: string;
  frameFooter?: string;
  user1?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const StayCard: FunctionComponent<StayCardType> = ({
  vector,
  heartIcon,
  brightwoodsEstate,
  bridlepathOntarioCanada,
  michellePlaceCard,
  frameFooter,
  user1,
  propBackgroundImage,
}) => {
  const heartIconFrameStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.staycard}>
      <div className={styles.heartIconFrame} style={heartIconFrameStyle}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src={vector} />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img className={styles.heartIcon} alt="" src={heartIcon} />
        </div>
      </div>
      <div className={styles.urbanLoft}>
        <div className={styles.forestvilleCottages}>
          <div className={styles.nightVector}>
            <div className={styles.brightwoodsEstate}>{brightwoodsEstate}</div>
            <div className={styles.bridlepathOntarioCanada}>
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className={styles.buttonText}>
            <div className={styles.vectorVector}>4.8</div>
            <img
              className={styles.michellePlaceCard}
              alt=""
              src={michellePlaceCard}
            />
          </div>
        </div>
        <div className={styles.similarStaysText}>
          <div className={styles.emptyFrame}>
            <div className={styles.nightNightNight}>$502</div>
            <div className={styles.night}>/night</div>
          </div>
          <img
            className={styles.frameFooterIcon}
            loading="eager"
            alt=""
            src={frameFooter}
          />
          <div className={styles.helpCentreAirCoverText}>
            <img
              className={styles.userIcon}
              loading="eager"
              alt=""
              src={user1}
            />
            <div className={styles.guests}>2 guests</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
