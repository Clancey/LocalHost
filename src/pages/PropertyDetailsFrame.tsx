import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import CardContainer from "../components/CardContainer";
import AboutThisHomeContainer from "../components/AboutThisHomeContainer";
import AmenitiesContainer from "../components/AmenitiesContainer";
import ReviewFormContainer from "../components/ReviewFormContainer";
import SimilarStaysCard from "../components/SimilarStaysCard";
import SupportForm from "../components/SupportForm";
import styles from "./PropertyDetailsFrame.module.css";

const PropertyDetailsFrame: FunctionComponent = () => {
  return (
    <div className={styles.propertyDetailsFrame}>
      <MainHeader />
      <CardContainer />
      <section className={styles.propertySummary}>
        <AboutThisHomeContainer />
        <AmenitiesContainer />
      </section>
      <ReviewFormContainer />
      <SimilarStaysCard />
      <SupportForm propFlexShrink="0" />
    </div>
  );
};

export default PropertyDetailsFrame;
