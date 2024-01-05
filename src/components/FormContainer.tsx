import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FormContainer.module.css";

type FormContainerType = {
  amenitiesDescription?: string;
  roomDescription?: string;
  roomFeatures?: string;

  /** Style props */
  propMaxWidth?: CSSProperties["maxWidth"];
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  amenitiesDescription,
  roomDescription,
  roomFeatures,
  propMaxWidth,
}) => {
  const featureItemsStyle: CSSProperties = useMemo(() => {
    return {
      maxWidth: propMaxWidth,
    };
  }, [propMaxWidth]);

  return (
    <div className={styles.featureItems} style={featureItemsStyle}>
      <img
        className={styles.featureIcons}
        loading="eager"
        alt=""
        src={amenitiesDescription}
      />
      <div className={styles.featureDescriptions}>
        <div className={styles.amenityHighlights}>{roomDescription}</div>
        <div className={styles.amenityDetails}>{roomFeatures}</div>
      </div>
    </div>
  );
};

export default FormContainer;
