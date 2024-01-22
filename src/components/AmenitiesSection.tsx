import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AmenitiesSection.module.css";

type AmenitiesSectionType = {
  mdilake?: string;
  lakeside?: string;
  tablertoolsKitchen2?: string;
  kitchen?: string;
  materialSymbolsnestCamIqO?: string;
  securityCamerasOnProperty?: string;
  ionwifi?: string;
  wifi?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinHeight?: CSSProperties["minHeight"];
};

const AmenitiesSection: FunctionComponent<AmenitiesSectionType> = ({
  mdilake,
  lakeside,
  tablertoolsKitchen2,
  kitchen,
  materialSymbolsnestCamIqO,
  securityCamerasOnProperty,
  ionwifi,
  wifi,
  propPadding,
  propMinHeight,
}) => {
  const amenitiesSection1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const mdilakeIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  return (
    <div className={styles.amenitiessection1} style={amenitiesSection1Style}>
      <div className={styles.mdilakeParent}>
        <img
          className={styles.mdilakeIcon}
          loading="eager"
          alt=""
          src={mdilake}
          style={mdilakeIconStyle}
        />
        <div className={styles.lakeside}>{lakeside}</div>
      </div>
      <div className={styles.tablertoolsKitchen2Parent}>
        <img
          className={styles.tablertoolsKitchen2Icon}
          loading="eager"
          alt=""
          src={tablertoolsKitchen2}
        />
        <div className={styles.kitchen}>{kitchen}</div>
      </div>
      <div className={styles.contactUsFrame}>
        <img
          className={styles.materialSymbolsnestCamIqOIcon}
          loading="eager"
          alt=""
          src={materialSymbolsnestCamIqO}
        />
        <div className={styles.securityCamerasOn}>
          {securityCamerasOnProperty}
        </div>
      </div>
      <div className={styles.ionwifiParent}>
        <img
          className={styles.ionwifiIcon}
          loading="eager"
          alt=""
          src={ionwifi}
        />
        <div className={styles.wifi}>{wifi}</div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
