import { FunctionComponent } from "react";
import StayCard from "./StayCard";
import styles from "./SimilarStaysSection.module.css";

const SimilarStaysSection: FunctionComponent = () => {
  return (
    <section className={styles.similarStaysSection}>
      <div className={styles.vectorShape}>
        <h3 className={styles.similarStays}>Similar stays</h3>
        <div className={styles.button}>View all</div>
      </div>
      <div className={styles.similarStaysFrame}>
        <StayCard
          brightwoodsEstate="Missisuaga Aistream"
          bridlepathOntarioCanada="Missisauga, Ontario, Canada"
          propBackgroundImage="url('/brightwoods-estate-frame@3x.png')"
        />
        <div className={styles.staycard}>
          <div className={styles.frameParent}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <div className={styles.wrapperHeartIcon}>
              <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.urbanLoftParent}>
                <div className={styles.urbanLoft}>Urban Loft</div>
                <div className={styles.urbanLoft1}>Urban Loft</div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div}>4.8</div>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.group}>
                <div className={styles.div1}>$502</div>
                <div className={styles.night}>/night</div>
              </div>
              <img className={styles.frameChild} alt="" src="/vector-11.svg" />
              <div className={styles.userParent}>
                <img className={styles.userIcon} alt="" src="/user.svg" />
                <div className={styles.guests}>2 guests</div>
              </div>
            </div>
          </div>
        </div>
        <StayCard
          brightwoodsEstate="Forestville Cottages"
          bridlepathOntarioCanada="Simcoe, Ontario Canada"
          propBackgroundImage="url('/frame-93@3x.png')"
        />
      </div>
    </section>
  );
};

export default SimilarStaysSection;
