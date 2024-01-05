import { FunctionComponent } from "react";
import AmenitiesCard from "./AmenitiesCard";
import styles from "./AmenitiesContainer.module.css";

const AmenitiesContainer: FunctionComponent = () => {
  return (
    <div className={styles.amenitiesSection}>
      <div className={styles.amenitiesHeader}>
        <h3 className={styles.amenitiesTitle}>Amenities</h3>
        <div className={styles.amenitiesGrid}>
          <div className={styles.amenityCategories}>
            <AmenitiesCard
              propertyDimensions="/mdilake.svg"
              amenities="Lakeside"
              listingDimensions="/tablertoolskitchen2.svg"
              roomFeatures="Kitchen"
              imageDimensions="/materialsymbolsnestcamiqoutdooroutline.svg"
              propertyFeatures="Security cameras on property"
              imageLabel="/ionwifi.svg"
              itemDescription="Wifi"
              propMinWidth="165px"
            />
            <AmenitiesCard
              propertyDimensions="/parking-fire-symbols@2x.png"
              amenities="Free parking"
              listingDimensions="/shower-freezer-icons@2x.png"
              roomFeatures="Outdoor shower"
              imageDimensions="/water-coffee-icons@2x.png"
              propertyFeatures="Hot water"
              imageLabel="/covidpersonalhygienehandliquidsoap.svg"
              itemDescription="Shampoo"
              propMinWidth="90px"
              propObjectFit="cover"
              propMinHeight="20px"
              propObjectFit1="cover"
              propObjectFit2="cover"
            />
            <AmenitiesCard
              propertyDimensions="/phfireextinguisher@2x.png"
              amenities="Fire Extinguisher"
              listingDimensions="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood@2x.png"
              roomFeatures="Freezer"
              imageDimensions="/materialsymbolscoffeemakeroutline@2x.png"
              propertyFeatures="Coffee Maker"
              imageLabel="/mdistove.svg"
              itemDescription="Glass stove"
              propMinWidth="95px"
              propObjectFit="cover"
              propMinHeight="20px"
              propObjectFit1="cover"
              propObjectFit2="cover"
            />
          </div>
          <button className={styles.searchFlightsButton}>
            <div className={styles.searchFlightsText}>Show all amenities</div>
          </button>
        </div>
      </div>
      <div className={styles.locationSection}>
        <div className={styles.locationFrame}>
          <div className={styles.locationWrapper}>
            <div className={styles.locationContent}>
              <h3 className={styles.locationHeading}>Where you’ll be</h3>
              <div className={styles.locationMapInfo}>
                <img className={styles.mapIcon} alt="" src="/map-icon@2x.png" />
                <div className={styles.locationLabel}>The Bridle Path</div>
              </div>
            </div>
            <div className={styles.weatherSection}>
              <div className={styles.weatherInfoContainer}>
                <img
                  className={styles.weatherIconWrapper}
                  loading="eager"
                  alt=""
                  src="/suncloud.svg"
                />
                <div className={styles.weatherDetails}>
                  <div className={styles.temperatureText}>20°C</div>
                  <div className={styles.weatherDescription}>Broken clouds</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img className={styles.sunIcon} alt="" src="/sun@2x.png" />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>23°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.c}>Sun</div>
                  <div className={styles.c}>27 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img
                    className={styles.sunIcon}
                    alt=""
                    src="/suncloud2@2x.png"
                  />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>22°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.c}>Mon</div>
                  <div className={styles.c}>28 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img className={styles.sunIcon} alt="" src="/sun@2x.png" />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>23°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.c}>Tue</div>
                  <div className={styles.c}>29 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img
                    className={styles.sunIcon}
                    alt=""
                    src="/suncloud2@2x.png"
                  />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>20°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.c}>Wed</div>
                  <div className={styles.c}>30 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img
                    className={styles.sunIcon}
                    alt=""
                    src="/suncloud2@2x.png"
                  />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>19°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.c}>Thu</div>
                  <div className={styles.c}>31 Aug</div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sunParent}>
                  <img className={styles.sunIcon} alt="" src="/sun@2x.png" />
                  <div className={styles.cWrapper}>
                    <b className={styles.c}>24°C</b>
                  </div>
                </div>
                <div className={styles.sunGroup}>
                  <div className={styles.c}>Fri</div>
                  <div className={styles.c}>1 Sep</div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.locationMapIcon}
            alt=""
            src="/location-map@2x.png"
          />
          <img
            className={styles.mapFrameIcon}
            loading="eager"
            alt=""
            src="/frame-92.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default AmenitiesContainer;
