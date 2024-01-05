import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AmenitiesCard.module.css";

type AmenitiesCardType = {
  propertyDimensions?: string;
  amenities?: string;
  listingDimensions?: string;
  roomFeatures?: string;
  imageDimensions?: string;
  propertyFeatures?: string;
  imageLabel?: string;
  itemDescription?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propObjectFit?: CSSProperties["objectFit"];
  propMinHeight?: CSSProperties["minHeight"];
  propObjectFit1?: CSSProperties["objectFit"];
  propObjectFit2?: CSSProperties["objectFit"];
};

const AmenitiesCard: FunctionComponent<AmenitiesCardType> = ({
  propertyDimensions,
  amenities,
  listingDimensions,
  roomFeatures,
  imageDimensions,
  propertyFeatures,
  imageLabel,
  itemDescription,
  propMinWidth,
  propObjectFit,
  propMinHeight,
  propObjectFit1,
  propObjectFit2,
}) => {
  const kitchenSecurityWifiStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const lakeIconContainerStyle: CSSProperties = useMemo(() => {
    return {
      objectFit: propObjectFit,
      minHeight: propMinHeight,
    };
  }, [propObjectFit, propMinHeight]);

  const kitchenSecurityWifiIconsStyle: CSSProperties = useMemo(() => {
    return {
      objectFit: propObjectFit1,
    };
  }, [propObjectFit1]);

  const materialSymbolsnestCamIqOIconStyle: CSSProperties = useMemo(() => {
    return {
      objectFit: propObjectFit2,
    };
  }, [propObjectFit2]);

  return (
    <div
      className={styles.kitchenSecurityWifi}
      style={kitchenSecurityWifiStyle}
    >
      <div className={styles.lakesideFeature}>
        <img
          className={styles.lakeIconContainer}
          loading="eager"
          alt=""
          src={propertyDimensions}
          style={lakeIconContainerStyle}
        />
        <div className={styles.lakesideLabel}>{amenities}</div>
      </div>
      <div className={styles.lakesideFeature}>
        <img
          className={styles.kitchenSecurityWifiIcons}
          loading="eager"
          alt=""
          src={listingDimensions}
          style={kitchenSecurityWifiIconsStyle}
        />
        <div className={styles.lakesideLabel}>{roomFeatures}</div>
      </div>
      <div className={styles.lakesideFeature}>
        <img
          className={styles.kitchenSecurityWifiIcons}
          loading="eager"
          alt=""
          src={imageDimensions}
          style={materialSymbolsnestCamIqOIconStyle}
        />
        <div className={styles.lakesideLabel}>{propertyFeatures}</div>
      </div>
      <div className={styles.lakesideFeature}>
        <img
          className={styles.kitchenSecurityWifiIcons}
          loading="eager"
          alt=""
          src={imageLabel}
        />
        <div className={styles.lakesideLabel}>{itemDescription}</div>
      </div>
    </div>
  );
};

export default AmenitiesCard;
