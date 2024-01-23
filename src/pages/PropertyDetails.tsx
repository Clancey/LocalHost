import { FunctionComponent } from "react";
import Header from "../components/Header";
import WeatherInfoFrame from "../components/WeatherInfoFrame";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import ReviewSection from "../components/ReviewSection";
import SimilarStaysSection from "../components/SimilarStaysSection";
import Footer from "../components/Footer";
import styles from "./PropertyDetails.module.css";

const PropertyDetails: FunctionComponent = () => {
  return (
    <div className={styles.propertyDetails}>
      <Header logo="/logo.svg" alerts="/alerts.svg" avatar="/avatar@2x.png" />
      <WeatherInfoFrame />
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
