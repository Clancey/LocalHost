import { FunctionComponent } from "react";
import DetailsCard from "./DetailsCard";
import styles from "./ListingDescription.module.css";

const ListingDescription: FunctionComponent = () => {
  return (
    <div className={styles.listingDescription}>
      <h3 className={styles.aboutThisHome}>About this home</h3>
      <div className={styles.textContactUsMessageTextT}>
        <div className={styles.parentContainerBottomBarCo}>
          <div className={styles.welcomeToBrightwoodsContainer}>
            <p className={styles.welcomeToBrightwoods}>
              Welcome to Brightwoods Cabin, your idyllic retreat nestled in the
              heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the
              tranquility of nature's embrace, is designed to provide the
              ultimate relaxing getaway.
            </p>
            <p className={styles.livingSpaceThisCharmingCa}>
              <b className={styles.livingSpace}>{`Living Space: `}</b>
              <span>
                This charming cabin boasts a spacious living area adorned with
                rustic decor and modern amenities. Enjoy the warmth of the
                wood-burning fireplace, relax on the plush sofas, and make
                yourself at home with our entertainment center featuring a
                flat-screen TV, WiFi, and more.
              </span>
            </p>
            <p className={styles.bedroomsWith3BeautifullyA}>
              <b className={styles.bedrooms}>Bedrooms:</b>
              <span>
                {" "}
                With 3 beautifully appointed bedrooms, our cabin comfortably
                accommodates up to [number of guests]. Each room is furnished
                with luxurious bedding and unique woodland-inspired touches to
                ensure a restful slumber.
              </span>
            </p>
            <p className={styles.kitchenDiningOurFullyEq}>
              <b className={styles.kitchenDining}>{`Kitchen & Dining:`}</b>
              <span>
                {" "}
                Our fully-equipped kitchen offers everything you need to prepare
                delicious home-cooked meals. The open dining area provides a
                welcoming space to enjoy meals with friends and family.
              </span>
            </p>
            <p className={styles.bathrooms2ModernBathrooms}>
              <b className={styles.bathrooms}>Bathrooms:</b>
              <span>
                {" "}
                2 modern bathrooms stocked with fresh towels, toiletries, and
                all essential amenities add to your convenience.
              </span>
            </p>
            <p className={styles.outdoorSpaceStepOutsideTo}>
              <b className={styles.outdoorSpace}>Outdoor Space:</b>
              <span>
                {" "}
                Step outside to a serene outdoor setting. Whether it's a morning
                coffee on the porch, a BBQ in the yard, or a soothing evening by
                the fire pit, the beauty of Bridlepath is at your doorstep.
              </span>
            </p>
            <p className={styles.locationLocatedJustMinutes}>
              <b className={styles.location}>Location:</b>
              <span>
                {" "}
                Located just minutes from [local attractions, trails, dining,
                shopping], our cabin offers the perfect base to explore the best
                of the region or simply unwind in seclusion.
              </span>
            </p>
            <p className={styles.hostedWithLoveWeTakePrid}>
              <b className={styles.hostedWithLove}>Hosted with Love:</b>
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
          <div className={styles.button}>Show more</div>
        </div>
        <div className={styles.vectorFrame}>
          <DetailsCard
            rectangleFrame="/frame-65.svg"
            dedicatedWorkspace="Dedicated workspace"
            aPrivateRoomEquippedWithW="A private room equipped with WiFi"
            propMaxWidth="100%"
          />
          <DetailsCard
            rectangleFrame="/frame-65-1.svg"
            dedicatedWorkspace="Self check-in"
            aPrivateRoomEquippedWithW="Check in with just your phone"
            propMaxWidth="unset"
          />
          <DetailsCard
            rectangleFrame="/frame-65-2.svg"
            dedicatedWorkspace="Free cancellation"
            aPrivateRoomEquippedWithW="Cancel anytime"
            propMaxWidth="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingDescription;
