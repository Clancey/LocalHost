import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SimilarStayCard.module.css";

type SimilarStayCardType = {
  dimension?: string;
  propertyLocation?: string;
  locationText?: string;
  propertyId?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propObjectFit?: CSSProperties["objectFit"];
};

const SimilarStayCard: FunctionComponent<SimilarStayCardType> = ({
  dimension,
  propertyLocation,
  locationText,
  propertyId,
  propBackgroundImage,
  propObjectFit,
}) => {
  const stayHeartIconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const amenityIconStyle: CSSProperties = useMemo(() => {
    return {
      objectFit: propObjectFit,
    };
  }, [propObjectFit]);

  return (
    <div className={styles.similarStayItem}>
      <div className={styles.stayHeartIcon} style={stayHeartIconStyle}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src={dimension} />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperFavoriteIcon}>
          <img
            className={styles.favoriteIcon}
            loading="eager"
            alt=""
            src="/hearticon11.svg"
          />
        </div>
      </div>
      <div className={styles.stayInfo}>
        <div className={styles.stayDetails}>
          <div className={styles.stayName}>
            <div className={styles.stayTitle}>{propertyLocation}</div>
            <div className={styles.stayLocation}>{locationText}</div>
          </div>
          <div className={styles.stayRating}>
            <div className={styles.ratingPlaceholder}>4.8</div>
            <img
              className={styles.ratingVectorIcon}
              loading="eager"
              alt=""
              src="/vector2.svg"
            />
          </div>
        </div>
        <div className={styles.stayPriceInfo}>
          <div className={styles.priceFrame}>
            <div className={styles.pricePlaceholder}>$502</div>
            <div className={styles.stayLocation}>/night</div>
          </div>
          <img
            className={styles.amenityIcon}
            loading="eager"
            alt=""
            src={propertyId}
            style={amenityIconStyle}
          />
          <div className={styles.guestsInfo}>
            <img
              className={styles.guestsNumberIcon}
              loading="eager"
              alt=""
              src="/user.svg"
            />
            <div className={styles.guestInfo}>2 guests</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarStayCard;
