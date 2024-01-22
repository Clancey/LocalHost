import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Freeparking.module.css";

const Freeparking: FunctionComponent = () => {
  return (
    <section className={styles.freeparking}>
      <div className={styles.frameFrame}>
        <img
          className={styles.tablertoolskitchenIcon}
          loading="eager"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.cilshower}>
          <img
            className={styles.streamlinefoodkitchenwarerefriIcon}
            loading="eager"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className={styles.streamlinefoodkitchenwarerefriIcon1}
            loading="eager"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.streamlinefoodkitchenwarerefriIcon2}
            loading="eager"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.streamlinefoodkitchenwarerefriIcon3}
            loading="eager"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className={styles.streamlinefoodkitchenwarerefri}>
            <img
              className={styles.frameFrameIcon}
              alt=""
              src="/frame-frame@2x.png"
            />
            <img
              className={styles.materialsymbolsnestcamiqoutdooIcon}
              loading="eager"
              alt=""
              src="/vector.svg"
            />
            <img
              className={styles.streamlinefoodkitchenwarerefriChild}
              loading="eager"
              alt=""
              src="/group-1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.vector}>
        <div className={styles.user}>
          <div className={styles.guests}>
            <div className={styles.footer}>
              <div className={styles.frameHosting}>
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
            <div className={styles.newFeatures}>
              <div className={styles.careers}>
                <div className={styles.communityforum}>5.0</div>
                <img
                  className={styles.investresIcon}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.hostingresponsibly}>
                <div className={styles.reviews}>200 Reviews</div>
              </div>
            </div>
          </div>
          <div
            className={styles.welcomeToOur}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className={styles.frameShowAmenities}>
          <div className={styles.emptySpaceSpacer}>
            <div className={styles.parentControlFilterOptions}>
              <div className={styles.pointShapeArrowSymbol}>
                <b className={styles.labelTextFilter}>$658</b>
                <div className={styles.headerTextLakesideName}>
                  <div className={styles.night}>/night</div>
                </div>
              </div>
              <div className={styles.parentContainerReviewHeader}>
                <div className={styles.icontrend}>
                  <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.textDatePostedTextTag} />
                  </div>
                </div>
                <div className={styles.bestTimeTo}>Best time to Book</div>
              </div>
            </div>
            <Button
              className={styles.searchFlightsButton}
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
          <div className={styles.parentContainerSimilarStay}>
            <div className={styles.hostedBy}>Hosted by:</div>
            <div className={styles.iconHeartLikeNode}>
              <img
                className={styles.textNameStayTitleTextTag}
                loading="eager"
                alt=""
                src="/ellipse-2@2x.png"
              />
              <div className={styles.textLocationStayAddressTex}>
                <div className={styles.michelleWard}>Michelle Ward</div>
                <div className={styles.joinedInMay}>Joined in May 2021</div>
              </div>
              <button className={styles.parentContainerFooterContai}>
                <img
                  className={styles.textHelpCentreNameTextTag}
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

export default Freeparking;
