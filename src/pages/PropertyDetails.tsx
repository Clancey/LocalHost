import { FunctionComponent } from "react";
import Header from "../components/Header";
import Freeparking from "../components/Freeparking";
import ListingDetailsSection from "../components/ListingDetailsSection";
import ReviewSection from "../components/ReviewSection";
import SimilarStaysSection from "../components/SimilarStaysSection";
import Footer from "../components/Footer";
import styles from "./PropertyDetails.module.css";

const PropertyDetails: FunctionComponent = () => {
  return (
    <div className={styles.propertyDetails}>
      <Header />
      <Freeparking />
      <ListingDetailsSection />
      <ReviewSection />
      <SimilarStaysSection />
      <Footer />
    </div>
  );
};

export default PropertyDetails;
