import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./WeatherInfoFrame.module.css";

const WeatherInfoFrame: FunctionComponent = () => {
  return (
    <section className={styles.weatherInfoFrame}>
      <div className={styles.sunCloudFrame}>
        <img
          className={styles.temperatureTextIcon}
          loading="eager"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.weatherDetailText}>
          <img
            className={styles.similarStaysSectionFrame}
            loading="eager"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className={styles.similarStaysSectionFrame1}
            loading="eager"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className={styles.similarStaysSectionFrame2}
            loading="eager"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className={styles.similarStaysSectionFrame3}
            loading="eager"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className={styles.similarStaysSectionFrame4}>
            <img
              className={styles.stayCardFrame}
              alt=""
              src="/stay-card-frame@2x.png"
            />
            <img
              className={styles.heartIcon}
              loading="eager"
              alt=""
              src="/vector.svg"
            />
            <input className={styles.groupInput} type="checkbox" />
          </div>
        </div>
      </div>
      <div className={styles.userFrame}>
        <div className={styles.nightIcon}>
          <div className={styles.footerFrame}>
            <div className={styles.hostingLocalhostFrame}>
              <div className={styles.searchArea}>
                <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                <div className={styles.bridlepathOntarioCanada}>
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className={styles.heartIcon1}
                loading="eager"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className={styles.textFrame}>
              <div className={styles.rectangleFrame}>
                <div className={styles.frame}>5.0</div>
                <img
                  className={styles.reviewCardFrame}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.stayCardFrame1}>
                <div className={styles.reviews}>200 Reviews</div>
              </div>
            </div>
          </div>
          <div
            className={styles.welcomeToOur}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className={styles.textFrame1}>
          <div className={styles.vectorFrame}>
            <div className={styles.textFrame2}>
              <div className={styles.rectangleFrame1}>
                <b className={styles.frame1}>$658</b>
                <div className={styles.nightWrapper}>
                  <div className={styles.night}>/night</div>
                </div>
              </div>
              <div className={styles.icontrendParent}>
                <div className={styles.icontrend}>
                  <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.textInputFrame} />
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
          <div className={styles.hostedByParent}>
            <div className={styles.hostedBy}>Hosted by:</div>
            <div className={styles.text}>
              <img
                className={styles.frameIcon}
                loading="eager"
                alt=""
                src="/ellipse-2@2x.png"
              />
              <div className={styles.calendarFrame}>
                <div className={styles.michelleWard}>Michelle Ward</div>
                <div className={styles.joinedInMay}>Joined in May 2021</div>
              </div>
              <button className={styles.text1}>
                <img className={styles.inputIcon} alt="" src="/vector-2.svg" />
                <div className={styles.superhost}>Superhost</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherInfoFrame;
