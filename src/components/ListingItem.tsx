import { FunctionComponent } from "react";
import styles from "./ListingItem.module.css";

type ListingItemType = {
  listingImage?: string;
  superhostIcon?: string;
  heartIcon?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  starIcon?: string;
  price?: string;
  trendIcon?: string;
  showBestTime?: boolean;
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  listingImage,
  superhostIcon,
  heartIcon,
  listingTitle,
  listingSubtitle,
  rating,
  starIcon,
  price,
  trendIcon,
  showBestTime,
}) => {
  return (
    <div className={styles.listingItem}>
      <img className={styles.listingImageIcon} alt="" src={listingImage} />
      <div className={styles.superhostTag}>
        <img className={styles.superhostIcon} alt="" src={superhostIcon} />
        <div className={styles.superhost}>Superhost</div>
      </div>
      <div className={styles.wrapperHeartIcon}>
        <img
          className={styles.heartIcon}
          loading="eager"
          alt=""
          src={heartIcon}
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
              src={starIcon}
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
