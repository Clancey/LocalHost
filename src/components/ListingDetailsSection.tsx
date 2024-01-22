import { FunctionComponent } from "react";
import ListingDescription from "./ListingDescription";
import LocationAmenities from "./LocationAmenities";
import styles from "./ListingDetailsSection.module.css";

const ListingDetailsSection: FunctionComponent = () => {
  return (
    <section className={styles.listingDetailsSection}>
      <ListingDescription />
      <LocationAmenities />
    </section>
  );
};

export default ListingDetailsSection;
