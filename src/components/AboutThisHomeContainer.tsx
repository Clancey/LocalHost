import { FunctionComponent } from "react";
import FormContainer from "./FormContainer";
import styles from "./AboutThisHomeContainer.module.css";

const AboutThisHomeContainer: FunctionComponent = () => {
  return (
    <div className={styles.homeSummaryParent}>
      <h3 className={styles.homeSummary}>About this home</h3>
      <div className={styles.homeDescriptionContainer}>
        <div className={styles.homeDescription}>
          <div className={styles.cabinIntroduction}>
            <p className={styles.welcomeToBrightwoods}>
              Welcome to Brightwoods Cabin, your idyllic retreat nestled in the
              heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the
              tranquility of nature's embrace, is designed to provide the
              ultimate relaxing getaway.
            </p>
            <p className={styles.welcomeToBrightwoods}>
              <b className={styles.livingSpace}>{`Living Space: `}</b>
              <span>
                This charming cabin boasts a spacious living area adorned with
                rustic decor and modern amenities. Enjoy the warmth of the
                wood-burning fireplace, relax on the plush sofas, and make
                yourself at home with our entertainment center featuring a
                flat-screen TV, WiFi, and more.
              </span>
            </p>
            <p className={styles.welcomeToBrightwoods}>
              <b className={styles.livingSpace}>Bedrooms:</b>
              <span>
                {" "}
                With 3 beautifully appointed bedrooms, our cabin comfortably
                accommodates up to [number of guests]. Each room is furnished
                with luxurious bedding and unique woodland-inspired touches to
                ensure a restful slumber.
              </span>
            </p>
            <p className={styles.welcomeToBrightwoods}>
              <b className={styles.livingSpace}>{`Kitchen & Dining:`}</b>
              <span>
                {" "}
                Our fully-equipped kitchen offers everything you need to prepare
                delicious home-cooked meals. The open dining area provides a
                welcoming space to enjoy meals with friends and family.
              </span>
            </p>
            <p className={styles.welcomeToBrightwoods}>
              <b className={styles.livingSpace}>Bathrooms:</b>
              <span>
                {" "}
                2 modern bathrooms stocked with fresh towels, toiletries, and
                all essential amenities add to your convenience.
              </span>
            </p>
            <p className={styles.welcomeToBrightwoods}>
              <b className={styles.livingSpace}>Outdoor Space:</b>
              <span>
                {" "}
                Step outside to a serene outdoor setting. Whether it's a morning
                coffee on the porch, a BBQ in the yard, or a soothing evening by
                the fire pit, the beauty of Bridlepath is at your doorstep.
              </span>
            </p>
            <p className={styles.welcomeToBrightwoods}>
              <b className={styles.livingSpace}>Location:</b>
              <span>
                {" "}
                Located just minutes from [local attractions, trails, dining,
                shopping], our cabin offers the perfect base to explore the best
                of the region or simply unwind in seclusion.
              </span>
            </p>
            <p className={styles.welcomeToBrightwoods}>
              <b className={styles.livingSpace}>Hosted with Love:</b>
              <span>
                {" "}
                We take pride in hosting our guests and are committed to making
                your stay unforgettable. We're just a call or message away
                should you need anything during your stay.
              </span>
            </p>
            <p className={styles.comeBeOur}>
              Come, be our guest at [Cabin Name], and experience a piece of
              woodland serenity right here in Bridlepath, Ontario. Book now and
              make yourself at home!
            </p>
          </div>
          <div className={styles.readMoreButton}>Show more</div>
        </div>
        <div className={styles.featureList}>
          <FormContainer
            amenitiesDescription="/frame-65.svg"
            roomDescription="Dedicated workspace"
            roomFeatures="A private room equipped with WiFi"
            propMaxWidth="100%"
          />
          <FormContainer
            amenitiesDescription="/frame-6511.svg"
            roomDescription="Self check-in"
            roomFeatures="Check in with just your phone"
            propMaxWidth="unset"
          />
          <FormContainer
            amenitiesDescription="/frame-6521.svg"
            roomDescription="Free cancellation"
            roomFeatures="Cancel anytime"
            propMaxWidth="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutThisHomeContainer;
