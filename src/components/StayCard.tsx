import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StayCard.module.css";

type StayCardType = {
  brightwoodsEstate?: string;
  bridlepathOntarioCanada?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const StayCard: FunctionComponent<StayCardType> = ({
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
}) => {
  const brightwoodsEstateFrameStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.staycard}>
      <div
        className={styles.brightwoodsEstateFrame}
        style={brightwoodsEstateFrameStyle}
      >
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className={styles.forestvilleCottagesFrame}>
        <div className={styles.bridlepathOntarioCanadaFram}>
          <div className={styles.brightwoodsEstateParent}>
            <div className={styles.brightwoodsEstate}>{brightwoodsEstate}</div>
            <div className={styles.bridlepathOntarioCanada}>
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div}>4.8</div>
            <img className={styles.vectorIcon1} alt="" src="/vector-8.svg" />
          </div>
        </div>
        <div className={styles.similarStaysContainer}>
          <div className={styles.group}>
            <div className={styles.div1}>$502</div>
            <div className={styles.night}>/night</div>
          </div>
          <img
            className={styles.similarStaysContainerChild}
            loading="eager"
            alt=""
            src="/vector-11.svg"
          />
          <div className={styles.userParent}>
            <img
              className={styles.userIcon}
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
