import { FunctionComponent } from "react";
import styles from "./MississaugaAirstreamCard.module.css";

const MississaugaAirstreamCard: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.imageParent}>
        <img
          className={styles.imageIcon}
          loading="eager"
          alt=""
          src="/image41@2x.png"
        />
        <div className={styles.itemDetails}>
          <div className={styles.listingInfo}>
            <div className={styles.listingCont}>
              <div className={styles.listingTitle}>Missisuaga Aistream</div>
              <div className={styles.listingSubtitle}>
                Missisauga, Ontario, Canada
              </div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating}>4.8</div>
              <img className={styles.starIcon} alt="" src="/star-icon@2x.png" />
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.pricePerNight}>
              <div className={styles.price}>$502</div>
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
          src="/image51@2x.png"
        />
        <div className={styles.itemDetails}>
          <div className={styles.listingInfo}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle}>Niagara Homes</div>
              <div className={styles.listingSubtitle}>
                Niagara, Ontario, Canada
              </div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating}>4.9</div>
              <img className={styles.starIcon} alt="" src="/star-icon@2x.png" />
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.pricePerNight}>
              <div className={styles.price}>$655</div>
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
        <img
          className={styles.imageIcon}
          loading="eager"
          alt=""
          src="/image61@2x.png"
        />
        <div className={styles.itemDetails}>
          <div className={styles.listingInfo}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle}>Sunny Estate</div>
              <div className={styles.listingSubtitle}>
                Barcort, Ontario Canada
              </div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating}>5.0</div>
              <img className={styles.starIcon} alt="" src="/star-icon@2x.png" />
            </div>
          </div>
          <div className={styles.bottomContainer2}>
            <div className={styles.pricePerNight2}>
              <div className={styles.price}>$320</div>
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
      <div className={styles.frameDiv}>
        <img className={styles.imageIcon} alt="" src="/image8@2x.png" />
        <div className={styles.superhostTag}>
          <img className={styles.superhostIcon} alt="" src="/vector@2x.png" />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img
            className={styles.heartIcon}
            loading="eager"
            alt=""
            src="/heart-icon@2x.png"
          />
        </div>
        <div className={styles.itemDetails3}>
          <div className={styles.listingInfo}>
            <div className={styles.listingCont1}>
              <div className={styles.listingTitle}>Lawrence Hills</div>
              <div className={styles.listingSubtitle}>
                Lawrence, Ontario Canada
              </div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating}>5.0</div>
              <img className={styles.starIcon} alt="" src="/star-icon@2x.png" />
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.pricePerNight}>
              <div className={styles.price}>$350</div>
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

export default MississaugaAirstreamCard;
