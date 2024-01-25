import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import ReviewSection from "../components/ReviewSection";
import SimilarStaysSection from "../components/SimilarStaysSection";
import Footer from "../components/Footer";
import styles from "./PropertyDetails.module.css";

const PropertyDetails: FunctionComponent = () => {
  return (
    <div className={styles.propertyDetails}>
      <Header />
      <FrameComponent1 />
      <section className={styles.listingDetailsSection}>
        <ListingDescription />
        <LocationAmenities />
      </section>
      <ReviewSection />
      <SimilarStaysSection />
      <Footer propMargin="unset" propMargin1="unset" propMargin2="unset" />
    </div>
  );
};

export default PropertyDetails;
