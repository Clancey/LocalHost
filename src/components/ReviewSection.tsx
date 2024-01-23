import { FunctionComponent } from "react";
import ReviewCard from "./ReviewCard";
import styles from "./ReviewSection.module.css";

const ReviewSection: FunctionComponent = () => {
  return (
    <section className={styles.reviewSection}>
      <div className={styles.reviewsText}>
        <h3 className={styles.reviews}>Reviews</h3>
        <div className={styles.button}>View all</div>
      </div>
      <div className={styles.june}>
        <ReviewCard
          ellipseShape="/ellipse-12@2x.png"
          johnnyCash="Johnny Cash"
          june2023="June 2023"
          reviewCardGuestCount="5.0"
          nightVector="/vector-1.svg"
          michellesPlaceWasSoGreatA="Michelle’s place was so great and definitely the perfect place for our long weekend. The lake is amazing!"
        />
        <ReviewCard
          ellipseShape="/ellipse-12-1@2x.png"
          johnnyCash="Yuta Watanabe"
          june2023="May 2023"
          reviewCardGuestCount="4.5"
          nightVector="/vector-1.svg"
          michellesPlaceWasSoGreatA="The location is perfect. I love the lake so much!!! This is one of the best stays we had for a while. Definitely recommended."
        />
        <ReviewCard
          ellipseShape="/ellipse-12-2@2x.png"
          johnnyCash="Shane Willis"
          june2023="December 2022"
          reviewCardGuestCount="4.8"
          nightVector="/vector-1.svg"
          michellesPlaceWasSoGreatA="A great place overall. One of the nicest place in town for sure. I will come back in the next few months with my family :)"
        />
      </div>
    </section>
  );
};

export default ReviewSection;
