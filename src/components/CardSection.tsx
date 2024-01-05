import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardSection.module.css";

type CardSectionType = {
  imageDescription?: string;
  locationName?: string;
  locationImageUrl?: string;
  price?: string;
  imageDimensions?: string;
  propertyImageUrl?: string;
  locationDescription?: string;
  imageDimensions2?: string;
  propertyName?: string;
  propertyLocation?: string;
  propertyDimensions?: string;
  imageDimensions3?: string;
  propertyName2?: string;
  propertyLocationName?: string;
  propertyDimensions2?: string;

  /** Style props */
  propZIndex?: CSSProperties["zIndex"];
  propWhiteSpace?: CSSProperties["whiteSpace"];
  propZIndex1?: CSSProperties["zIndex"];
  propFlexShrink?: CSSProperties["flexShrink"];
  propPadding?: CSSProperties["padding"];
  propBoxSizing?: CSSProperties["boxSizing"];
  propWidth?: CSSProperties["width"];
  propJustifyContent?: CSSProperties["justifyContent"];
  propGap?: CSSProperties["gap"];
  propRowGap?: CSSProperties["rowGap"];
  propWidth1?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propZIndex2?: CSSProperties["zIndex"];
  propObjectFit?: CSSProperties["objectFit"];
  propZIndex3?: CSSProperties["zIndex"];
  propObjectFit1?: CSSProperties["objectFit"];
};

const CardSection: FunctionComponent<CardSectionType> = ({
  imageDescription,
  locationName,
  locationImageUrl,
  price,
  imageDimensions,
  propertyImageUrl,
  locationDescription,
  imageDimensions2,
  propertyName,
  propertyLocation,
  propertyDimensions,
  imageDimensions3,
  propertyName2,
  propertyLocationName,
  propertyDimensions2,
  propZIndex,
  propWhiteSpace,
  propZIndex1,
  propFlexShrink,
  propPadding,
  propBoxSizing,
  propWidth,
  propJustifyContent,
  propGap,
  propRowGap,
  propWidth1,
  propFlex,
  propZIndex2,
  propObjectFit,
  propZIndex3,
  propObjectFit1,
}) => {
  const itemDetailsStyle: CSSProperties = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  const listingSubtitle1Style: CSSProperties = useMemo(() => {
    return {
      whiteSpace: propWhiteSpace,
    };
  }, [propWhiteSpace]);

  const itemDetails1Style: CSSProperties = useMemo(() => {
    return {
      zIndex: propZIndex1,
    };
  }, [propZIndex1]);

  const listingContStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: propFlexShrink,
      padding: propPadding,
      boxSizing: propBoxSizing,
      width: propWidth,
    };
  }, [propFlexShrink, propPadding, propBoxSizing, propWidth]);

  const bottomContainer2Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
      gap: propGap,
      rowGap: propRowGap,
    };
  }, [propJustifyContent, propGap, propRowGap]);

  const pricePerNight2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
    };
  }, [propWidth1, propFlex]);

  const itemDetails2Style: CSSProperties = useMemo(() => {
    return {
      zIndex: propZIndex2,
    };
  }, [propZIndex2]);

  const starIcon4Style: CSSProperties = useMemo(() => {
    return {
      objectFit: propObjectFit,
    };
  }, [propObjectFit]);

  const itemDetails3Style: CSSProperties = useMemo(() => {
    return {
      zIndex: propZIndex3,
    };
  }, [propZIndex3]);

  const starIcon5Style: CSSProperties = useMemo(() => {
    return {
      objectFit: propObjectFit1,
    };
  }, [propObjectFit1]);

  return (
    <section className={styles.frameParent}>
      <div className={styles.imageParent}>
        <img
          className={styles.imageIcon}
          loading="eager"
          alt=""
          src={imageDescription}
        />
        <div className={styles.itemDetails} style={itemDetailsStyle}>
          <div className={styles.listingInfo}>
            <div className={styles.listingCont}>
              <div className={styles.listingTitle}>{locationName}</div>
              <div
                className={styles.listingSubtitle}
                style={listingSubtitle1Style}
              >
                {locationImageUrl}
              </div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating}>5.0</div>
              <img
                className={styles.starIcon}
                loading="eager"
                alt=""
                src="/vector2.svg"
              />
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.pricePerNight}>
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
        <img
          className={styles.imageIcon}
          loading="eager"
          alt=""
          src={imageDimensions}
        />
        <div className={styles.itemDetails} style={itemDetails1Style}>
          <div className={styles.listingInfo}>
            <div className={styles.listingCont1} style={listingContStyle}>
              <div className={styles.listingTitle}>{propertyImageUrl}</div>
              <div className={styles.listingSubtitle}>
                {locationDescription}
              </div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating}>5.0</div>
              <img
                className={styles.starIcon}
                loading="eager"
                alt=""
                src="/vector2.svg"
              />
            </div>
          </div>
          <div
            className={styles.bottomContainer1}
            style={bottomContainer2Style}
          >
            <div className={styles.pricePerNight1} style={pricePerNight2Style}>
              <div className={styles.price}>$385</div>
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
        <img
          className={styles.imageIcon}
          loading="eager"
          alt=""
          src={imageDimensions2}
        />
        <div className={styles.itemDetails} style={itemDetails2Style}>
          <div className={styles.listingInfo}>
            <div className={styles.listingCont}>
              <div className={styles.listingTitle}>{propertyName}</div>
              <div className={styles.listingSubtitle}>{propertyLocation}</div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating}>5.0</div>
              <img
                className={styles.starIcon2}
                alt=""
                src={propertyDimensions}
                style={starIcon4Style}
              />
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.pricePerNight}>
              <div className={styles.price}>$385</div>
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
        <img
          className={styles.imageIcon}
          loading="eager"
          alt=""
          src={imageDimensions3}
        />
        <div className={styles.itemDetails} style={itemDetails3Style}>
          <div className={styles.listingInfo}>
            <div className={styles.listingCont}>
              <div className={styles.listingTitle}>{propertyName2}</div>
              <div className={styles.listingSubtitle}>
                {propertyLocationName}
              </div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating}>5.0</div>
              <img
                className={styles.starIcon2}
                alt=""
                src={propertyDimensions2}
                style={starIcon5Style}
              />
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.pricePerNight}>
              <div className={styles.price}>$385</div>
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
    </section>
  );
};

export default CardSection;
