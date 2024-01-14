import { useMemo } from "react";
import styles from "./StaysNearbyCard.module.css";

const StaysNearbyCard = ({
  homeImage,
  titleLabel,
  subtitleLabel,
  ratingText,
  priceAmount,
  showBestTimeContainer,
  propDisplay,
  propAlignItems,
  propWidth,
  propPadding,
  propBoxSizing,
  propWhiteSpace,
  propHeight,
}) => {
  const superhostStyle = useMemo(() => {
    return {
      display: propDisplay,
      alignItems: propAlignItems,
    };
  }, [propDisplay, propAlignItems]);

  const homeContentStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propWidth, propPadding, propBoxSizing]);

  const subtitleLabelStyle = useMemo(() => {
    return {
      whiteSpace: propWhiteSpace,
    };
  }, [propWhiteSpace]);

  const priceContainerStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.homeCard}>
      <img className={styles.homeImageIcon} alt="" src={homeImage} />
      <div className={styles.superhostTag}>
        <img className={styles.superhostIcon} alt="" src="/vector.svg" />
        <div className={styles.superhost} style={superhostStyle}>
          Superhost
        </div>
      </div>
      <div className={styles.wrapperFavoriteIcon}>
        <img
          className={styles.favoriteIcon}
          loading="eager"
          alt=""
          src="/heart-icon@2x.png"
        />
      </div>
      <div className={styles.homeDetails}>
        <div className={styles.homeInfo}>
          <div className={styles.homeContent} style={homeContentStyle}>
            <div className={styles.titleLabel}>{titleLabel}</div>
            <div className={styles.subtitleLabel} style={subtitleLabelStyle}>
              {subtitleLabel}
            </div>
          </div>
          <div className={styles.ratingContainer}>
            <div className={styles.ratingText}>{ratingText}</div>
            <img
              className={styles.starIcon}
              loading="eager"
              alt=""
              src="/vector1.svg"
            />
          </div>
        </div>
        <div className={styles.priceContainer} style={priceContainerStyle}>
          <div className={styles.priceLabel}>
            <div className={styles.priceAmount}>{priceAmount}</div>
            <div className={styles.perNightLabel}>/night</div>
          </div>
          {showBestTimeContainer && (
            <div className={styles.bestTimeContainer}>
              <img
                className={styles.trendIcon}
                loading="eager"
                alt=""
                src="/trend-icon@2x.png"
              />
              <div className={styles.priceChart}>Price chart</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaysNearbyCard;
