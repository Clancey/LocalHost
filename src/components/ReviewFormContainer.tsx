import { FunctionComponent } from "react";
import ReviewCardForm from "./ReviewCardForm";
import styles from "./ReviewFormContainer.module.css";

const ReviewFormContainer: FunctionComponent = () => {
  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsFrame}>
        <h3 className={styles.reviewsHeading}>Reviews</h3>
        <div className={styles.viewAllReviews}>View all</div>
      </div>
      <div className={styles.reviewList}>
        <ReviewCardForm
          rating="5.0"
          reviewText="Michelle’s place was so great and definitely the perfect place for our long weekend. The lake is amazing!"
        />
        <div className={styles.reviewItems}>
          <div className={styles.frameParent}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                loading="eager"
                alt=""
                src="/ellipse-12@2x.png"
              />
              <div className={styles.yutaWatanabeParent}>
                <div className={styles.yutaWatanabe}>Yuta Watanabe</div>
                <div className={styles.may2023}>May 2023</div>
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>4.5</div>
              <img
                className={styles.vectorIcon}
                loading="eager"
                alt=""
                src="/vector11.svg"
              />
            </div>
          </div>
          <div className={styles.theLocationIs}>
            The location is perfect. I love the lake so much!!! This is one of
            the best stays we had for a while. Definitely recommended.
          </div>
        </div>
        <ReviewCardForm
          rating="4.8"
          reviewText="A great place overall. One of the nicest place in town for sure. I will come back in the next few months with my family :)"
        />
      </div>
    </section>
  );
};

export default ReviewFormContainer;
