import { FunctionComponent } from "react";
import styles from "./CardContainer.module.css";

const CardContainer: FunctionComponent = () => {
  return (
    <section className={styles.contentFrame}>
      <div className={styles.subFrame}>
        <img
          className={styles.emptyFrameIcon}
          loading="eager"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.galleryFrame}>
          <div className={styles.wrapperGalleryItems}>
            <img
              className={styles.galleryItemsIcon}
              loading="eager"
              alt=""
              src="/frame-46@2x.png"
            />
          </div>
          <img
            className={styles.galleryItemsIcon1}
            loading="eager"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.galleryItemsIcon1}
            loading="eager"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.galleryItemsIcon1}
            loading="eager"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className={styles.galleryItems}>
            <img
              className={styles.galleryItemFrame}
              alt=""
              src="/gallery-item-frame@2x.png"
            />
            <div className={styles.wrapperGalleryVector}>
              <img
                className={styles.galleryVectorIcon}
                loading="eager"
                alt=""
                src="/vector1.svg"
              />
            </div>
            <img
              className={styles.galleryGroupIcon}
              loading="eager"
              alt=""
              src="/group-1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.propertyInfoFrame}>
        <div className={styles.propertyOverviewFrame}>
          <div className={styles.propertyHighlightsFrame}>
            <div className={styles.propertyTitleFrame}>
              <div className={styles.propertyNameFrame}>
                <div className={styles.propertyNameText}>
                  <h2 className={styles.cabinTitle}>Brightwoods Cabin</h2>
                  <div className={styles.locationText}>
                    Bridlepath, Ontario, Canada
                  </div>
                </div>
                <img
                  className={styles.favoriteIconInstance}
                  loading="eager"
                  alt=""
                  src="/hearticon.svg"
                />
              </div>
              <div className={styles.ratingFrame}>
                <div className={styles.ratingStarsFrame}>
                  <div className={styles.ratingText}>5.0</div>
                  <img
                    className={styles.ratingVectorIcon}
                    alt=""
                    src="/rating-vector@2x.png"
                  />
                </div>
                <div className={styles.reviewCount}>
                  <div className={styles.reviewCountText}>200 Reviews</div>
                </div>
              </div>
            </div>
            <div
              className={styles.cabinDescription}
            >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
          </div>
        </div>
        <div className={styles.pricingInfoWrapper}>
          <div className={styles.pricingInfo}>
            <div className={styles.bookingTipsParent}>
              <div className={styles.bookingTips}>
                <div className={styles.pricePerNightParent}>
                  <b className={styles.pricePerNight}>$658</b>
                  <div className={styles.nightLabelWrapper}>
                    <div className={styles.nightLabel}>/night</div>
                  </div>
                </div>
                <div className={styles.trendIconParent}>
                  <div className={styles.trendIcon}>
                    <div className={styles.trendIndicatorParent}>
                      <img
                        className={styles.trendIndicatorIcon}
                        alt=""
                        src="/trend-indicator@2x.png"
                      />
                      <div className={styles.trendBackground} />
                    </div>
                  </div>
                  <div className={styles.nightLabel}>Best time to Book</div>
                </div>
              </div>
              <button className={styles.searchFlightsButton}>
                <div className={styles.flightSearchButton}>Book this home</div>
              </button>
            </div>
            <div className={styles.hostSectionParent}>
              <div className={styles.nightLabel}>Hosted by:</div>
              <div className={styles.hostAvatarParent}>
                <img
                  className={styles.hostAvatarIcon}
                  loading="eager"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <div className={styles.hostNameParent}>
                  <div className={styles.hostName}>Michelle Ward</div>
                  <div className={styles.hostJoinDate}>Joined in May 2021</div>
                </div>
                <button className={styles.superhostBadgeParent}>
                  <img
                    className={styles.superhostBadgeIcon}
                    alt=""
                    src="/superhost-badge@2x.png"
                  />
                  <div className={styles.superhostLabel}>Superhost</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
