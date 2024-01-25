import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.textShampoo}>
      <div className={styles.glassStove}>
        <img
          className={styles.sunCloudIcon}
          loading="eager"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.frameReviewCard}>
          <img
            className={styles.ellipseIcon}
            loading="eager"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className={styles.ellipseIcon1}
            loading="eager"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.ellipseIcon2}
            loading="eager"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.ellipseIcon3}
            loading="eager"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className={styles.ellipse}>
            <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
            <img
              className={styles.frameSimilarStays}
              loading="eager"
              alt=""
              src="/vector.svg"
            />
            <input className={styles.groupInput} type="checkbox" />
          </div>
        </div>
      </div>
      <div className={styles.user}>
        <div className={styles.frameworkHosting}>
          <div className={styles.privacyPolicy}>
            <div className={styles.helpCentre}>
              <div className={styles.searchButtonFrame}>
                <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                <div className={styles.bridlepathOntarioCanada}>
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className={styles.heartIcon}
                loading="eager"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className={styles.mdilakeParent}>
              <div className={styles.mdilake}>
                <div className={styles.phcar}>5.0</div>
                <img
                  className={styles.phfireextinguisherIcon}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.lakeside}>
                <div className={styles.reviews}>200 Reviews</div>
              </div>
            </div>
          </div>
          <div
            className={styles.welcomeToOur}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className={styles.streamlinefoodkitchenwarerefri}>
          <div className={styles.vector}>
            <div className={styles.theBridlePath}>
              <div className={styles.wifi}>
                <b className={styles.shampoo}>$658</b>
                <div className={styles.nightWrapper}>
                  <div className={styles.night}>/night</div>
                </div>
              </div>
              <div className={styles.newFeatures}>
                <div className={styles.icontrend}>
                  <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.searchIconButton} />
                  </div>
                </div>
                <div className={styles.bestTimeTo}>Best time to Book</div>
              </div>
            </div>
            <Button
              className={styles.searchFlightsButton}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#00c29f",
                borderRadius: "6px",
                "&:hover": { background: "#00c29f" },
                height: 58,
              }}
            >
              Book this home
            </Button>
          </div>
          <div className={styles.rectangleResultList}>
            <div className={styles.hostedBy}>Hosted by:</div>
            <div className={styles.reviewCardFrame}>
              <img
                className={styles.ellipseReviewerPic}
                loading="eager"
                alt=""
                src="/ellipse-2@2x.png"
              />
              <div className={styles.textReviewTitle}>
                <div className={styles.michelleWard}>Michelle Ward</div>
                <div className={styles.joinedInMay}>Joined in May 2021</div>
              </div>
              <button className={styles.frameReviewerName}>
                <img
                  className={styles.frameReviewDate}
                  alt=""
                  src="/vector-2.svg"
                />
                <div className={styles.superhost}>Superhost</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
