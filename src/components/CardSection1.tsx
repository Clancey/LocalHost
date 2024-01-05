import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardSection1.module.css";

type CardSection1Type = {
  image?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  starIcon?: string;
  price?: string;
  image1?: string;
  listingTitle1?: string;
  listingSubtitle1?: string;
  rating1?: string;
  starIcon1?: string;
  price1?: string;
  image2?: string;
  listingTitle2?: string;
  listingSubtitle2?: string;
  starIcon2?: string;
  price2?: string;
  image3?: string;
  listingTitle3?: string;
  listingSubtitle3?: string;
  rating2?: string;
  starIcon3?: string;
  price3?: string;

  /** Style props */
  frameDivWhiteSpace?: CSSProperties["whiteSpace"];
  listingInfoObjectFit?: CSSProperties["objectFit"];
  listingContJustifyContent?: CSSProperties["justifyContent"];
  listingContGap?: CSSProperties["gap"];
  listingContRowGap?: CSSProperties["rowGap"];
  listingTitleWidth?: CSSProperties["width"];
  listingTitleFlex?: CSSProperties["flex"];
  propObjectFit?: CSSProperties["objectFit"];
  propObjectFit1?: CSSProperties["objectFit"];
  propObjectFit2?: CSSProperties["objectFit"];
  propJustifyContent?: CSSProperties["justifyContent"];
  propGap?: CSSProperties["gap"];
  propRowGap?: CSSProperties["rowGap"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
};

const CardSection1: FunctionComponent<CardSection1Type> = ({
  image,
  listingTitle,
  listingSubtitle,
  rating,
  starIcon,
  price,
  image1,
  listingTitle1,
  listingSubtitle1,
  rating1,
  starIcon1,
  price1,
  image2,
  listingTitle2,
  listingSubtitle2,
  starIcon2,
  price2,
  image3,
  listingTitle3,
  listingSubtitle3,
  rating2,
  starIcon3,
  price3,
  frameDivWhiteSpace,
  listingInfoObjectFit,
  listingContJustifyContent,
  listingContGap,
  listingContRowGap,
  listingTitleWidth,
  listingTitleFlex,
  propObjectFit,
  propObjectFit1,
  propObjectFit2,
  propJustifyContent,
  propGap,
  propRowGap,
  propWidth,
  propFlex,
}) => {
  const listingSubtitleStyle: CSSProperties = useMemo(() => {
    return {
      whiteSpace: frameDivWhiteSpace,
    };
  }, [frameDivWhiteSpace]);

  const starIconStyle: CSSProperties = useMemo(() => {
    return {
      objectFit: listingInfoObjectFit,
    };
  }, [listingInfoObjectFit]);

  const bottomContainerStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: listingContJustifyContent,
      gap: listingContGap,
      rowGap: listingContRowGap,
    };
  }, [listingContJustifyContent, listingContGap, listingContRowGap]);

  const pricePerNightStyle: CSSProperties = useMemo(() => {
    return {
      width: listingTitleWidth,
      flex: listingTitleFlex,
    };
  }, [listingTitleWidth, listingTitleFlex]);

  const starIcon1Style: CSSProperties = useMemo(() => {
    return {
      objectFit: propObjectFit,
    };
  }, [propObjectFit]);

  const starIcon2Style: CSSProperties = useMemo(() => {
    return {
      objectFit: propObjectFit1,
    };
  }, [propObjectFit1]);

  const starIcon3Style: CSSProperties = useMemo(() => {
    return {
      objectFit: propObjectFit2,
    };
  }, [propObjectFit2]);

  const bottomContainer1Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
      gap: propGap,
      rowGap: propRowGap,
    };
  }, [propJustifyContent, propGap, propRowGap]);

  const pricePerNight1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <section className={styles.frameParent}>
      <div className={styles.imageParent}>
        <img className={styles.imageIcon} loading="eager" alt="" src={image} />
        <div className={styles.itemDetails}>
          <div className={styles.listingInfo}>
            <div className={styles.listingCont}>
              <div className={styles.listingTitle}>{listingTitle}</div>
              <div
                className={styles.listingSubtitle}
                style={listingSubtitleStyle}
              >
                {listingSubtitle}
              </div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating}>{rating}</div>
              <img
                className={styles.starIcon}
                alt=""
                src={starIcon}
                style={starIconStyle}
              />
            </div>
          </div>
          <div className={styles.bottomContainer} style={bottomContainerStyle}>
            <div className={styles.pricePerNight} style={pricePerNightStyle}>
              <div className={styles.price}>{price}</div>
              <div className={styles.listingSubtitle}>/night</div>
            </div>
            <div className={styles.bestTime}>
              <img
                className={styles.trendIcon}
                loading="eager"
                alt=""
                src="/trend-icon@2x.png"
              />
              <div className={styles.priceChart}>Price chart</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageParent}>
        <img className={styles.imageIcon} loading="eager" alt="" src={image1} />
        <div className={styles.itemDetails}>
          <div className={styles.listingInfo}>
            <div className={styles.listingCont}>
              <div className={styles.listingTitle}>{listingTitle1}</div>
              <div className={styles.listingSubtitle}>{listingSubtitle1}</div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating}>{rating1}</div>
              <img
                className={styles.starIcon}
                alt=""
                src={starIcon1}
                style={starIcon1Style}
              />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price}>{price1}</div>
              <div className={styles.listingSubtitle}>/night</div>
            </div>
            <div className={styles.bestTime}>
              <img
                className={styles.trendIcon}
                alt=""
                src="/trend-icon@2x.png"
              />
              <div className={styles.priceChart}>Price chart</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageParent}>
        <img className={styles.imageIcon} loading="eager" alt="" src={image2} />
        <div className={styles.itemDetails}>
          <div className={styles.listingInfo}>
            <div className={styles.listingCont}>
              <div className={styles.listingTitle}>{listingTitle2}</div>
              <div className={styles.listingSubtitle}>{listingSubtitle2}</div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating}>5.0</div>
              <img
                className={styles.starIcon}
                alt=""
                src={starIcon2}
                style={starIcon2Style}
              />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <div className={styles.price}>{price2}</div>
              <div className={styles.listingSubtitle}>/night</div>
            </div>
            <div className={styles.bestTime}>
              <img
                className={styles.trendIcon}
                alt=""
                src="/trend-icon@2x.png"
              />
              <div className={styles.priceChart}>Price chart</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageParent}>
        <img className={styles.imageIcon} loading="eager" alt="" src={image3} />
        <div className={styles.itemDetails}>
          <div className={styles.listingInfo}>
            <div className={styles.listingCont}>
              <div className={styles.listingTitle}>{listingTitle3}</div>
              <div className={styles.listingSubtitle}>{listingSubtitle3}</div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating}>{rating2}</div>
              <img
                className={styles.starIcon}
                alt=""
                src={starIcon3}
                style={starIcon3Style}
              />
            </div>
          </div>
          <div className={styles.bottomContainer} style={bottomContainer1Style}>
            <div className={styles.pricePerNight} style={pricePerNight1Style}>
              <div className={styles.price}>{price3}</div>
              <div className={styles.listingSubtitle}>/night</div>
            </div>
            <div className={styles.bestTime}>
              <img
                className={styles.trendIcon}
                alt=""
                src="/trend-icon@2x.png"
              />
              <div className={styles.priceChart}>Price chart</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection1;
