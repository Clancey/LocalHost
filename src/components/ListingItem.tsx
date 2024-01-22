import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ListingItem.module.css";

type ListingItemType = {
  listingImage?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;
  trendIcon?: string;
  showBestTime?: boolean;

  /** Style props */
  propDisplay?: CSSProperties["display"];
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  trendIcon,
  showBestTime,
  propDisplay,
}) => {
  const superhostStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={styles.listingItem}>
      <img className={styles.listingImageIcon} alt="" src={listingImage} />
      <div className={styles.superhostTag}>
        <img
          className={styles.superhostIcon}
          alt=""
          src="/superhost-icon.svg"
        />
        <div className={styles.superhost} style={superhostStyle}>
          Superhost
        </div>
      </div>
      <div className={styles.wrapperHeartIcon}>
        <img
          className={styles.heartIcon}
          loading="eager"
          alt=""
          src="/heart-icon@2x.png"
        />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <div className={styles.listingTitle}>{listingTitle}</div>
            <div className={styles.listingSubtitle}>{listingSubtitle}</div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>{rating}</div>
            <img
              className={styles.starIcon}
              loading="eager"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight}>
            <div className={styles.price}>{price}</div>
            <div className={styles.night}>/night</div>
          </div>
          {showBestTime && (
            <div className={styles.bestTime}>
              <img
                className={styles.trendIcon}
                loading="eager"
                alt=""
                src={trendIcon}
              />
              <div className={styles.priceChart}>Price chart</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
