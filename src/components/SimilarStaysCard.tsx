import { FunctionComponent } from "react";
import SimilarStayCard from "./SimilarStayCard";
import styles from "./SimilarStaysCard.module.css";

const SimilarStaysCard: FunctionComponent = () => {
  return (
    <section className={styles.similarStaysSection}>
      <div className={styles.similarStaysHeader}>
        <h3 className={styles.similarStaysTitle}>Similar stays</h3>
        <div className={styles.viewAllButton}>View all</div>
      </div>
      <div className={styles.similarStaysList}>
        <SimilarStayCard
          dimension="/vector@2x.png"
          propertyLocation="Missisuaga Aistream"
          locationText="Missisauga, Ontario, Canada"
          propertyId="/vector-1.svg"
          propBackgroundImage="url('/stay-heart-icon@3x.png')"
        />
        <div className={styles.similarStayItem}>
          <div className={styles.frameParent}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector5@2x.png" />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <div className={styles.wrapperHeartIcon}>
              <img
                className={styles.heartIcon}
                loading="eager"
                alt=""
                src="/hearticon11.svg"
              />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.urbanLoftParent}>
                <div className={styles.urbanLoft}>Urban Loft</div>
                <div className={styles.urbanLoft}>Urban Loft</div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div}>4.8</div>
                <img
                  className={styles.vectorIcon1}
                  loading="eager"
                  alt=""
                  src="/vector2.svg"
                />
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.group}>
                <div className={styles.div1}>$502</div>
                <div className={styles.night}>/night</div>
              </div>
              <img
                className={styles.frameChild}
                alt=""
                src="/vector-12@2x.png"
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
        <SimilarStayCard
          dimension="/vector6@2x.png"
          propertyLocation="Forestville Cottages"
          locationText="Simcoe, Ontario Canada"
          propertyId="/vector-13@2x.png"
          propBackgroundImage="unset"
          propObjectFit="cover"
        />
      </div>
    </section>
  );
};

export default SimilarStaysCard;
