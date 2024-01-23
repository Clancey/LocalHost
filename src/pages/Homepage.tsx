import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import SearchSectionHeader from "../components/SearchSectionHeader";
import ListingItem from "../components/ListingItem";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <Header logo="/logo.svg" alerts="/alerts.svg" avatar="/avatar@2x.png" />
      <HeroContainer />
      <main className={styles.staysSection}>
        <SearchSectionHeader />
        <section className={styles.homes}>
          <ListingItem
            listingImage="/listing-image@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Brightwoods Cabin"
            listingSubtitle="Bridlepath, Ontario, Canada"
            rating="4.9"
            starIcon="/vector-8.svg"
            price="$658"
            trendIcon="/trend-icon@2x.png"
            showBestTime
          />
          <ListingItem
            listingImage="/image@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Urban Loft"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="4.5"
            starIcon="/vector-8.svg"
            price="$410"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-1@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Forestville Cottages"
            listingSubtitle="Simcoe, Ontario Canada"
            rating="5.0"
            starIcon="/vector-8.svg"
            price="$325"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-2@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Unionville Logde"
            listingSubtitle="Markham, Ontario Canada"
            rating="4.6"
            starIcon="/vector-8.svg"
            price="$485"
            trendIcon="/trend-icon@2x.png"
            showBestTime
          />
          <ListingItem
            listingImage="/image-3@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Missisuaga Aistream"
            listingSubtitle="Missisauga, Ontario, Canada"
            rating="4.8"
            starIcon="/vector-8.svg"
            price="$502"
            trendIcon="/trend-icon@2x.png"
            showBestTime
          />
          <ListingItem
            listingImage="/image-4@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Niagara Homes"
            listingSubtitle="Niagara, Ontario, Canada"
            rating="4.9"
            starIcon="/vector-8.svg"
            price="$655"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-5@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Sunny Estate"
            listingSubtitle="Barcort, Ontario Canada"
            rating="5.0"
            starIcon="/vector-8.svg"
            price="$320"
            trendIcon="/trend-icon@2x.png"
            showBestTime
          />
          <ListingItem
            listingImage="/image-6@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Lawrence Hills"
            listingSubtitle="Lawrence, Ontario Canada"
            rating="5.0"
            starIcon="/vector-8.svg"
            price="$350"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-7@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Simcoe Lake Lodge"
            listingSubtitle="Simcoe, Ontario, Canada"
            rating="5.0"
            starIcon="/vector-8.svg"
            price="$395"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-8@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Wasaga Beach Home"
            listingSubtitle="Georgina Bay, Ontario, Canada"
            rating="5.0"
            starIcon="/vector-8.svg"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime
          />
          <ListingItem
            listingImage="/image-9@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Banff Hills"
            listingSubtitle="Banff, Alberta, Canada"
            rating="5.0"
            starIcon="/vector-8.svg"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime
          />
          <ListingItem
            listingImage="/image-10@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Creemore Canada"
            listingSubtitle="Creemore, Alberta, Canada"
            rating="5.0"
            starIcon="/vector-8.svg"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-11@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Kawartha Lakes"
            listingSubtitle="Kawartha, Alberta,  Canada"
            rating="5.0"
            starIcon="/vector-8.svg"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-12@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Revelstoke Cabin"
            listingSubtitle="Revelstoke, Alberta, Canada"
            rating="5.0"
            starIcon="/vector-8.svg"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime
          />
          <ListingItem
            listingImage="/image-13@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            starIcon="/vector-8.svg"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
          />
          <ListingItem
            listingImage="/image-14@2x.png"
            superhostIcon="/vector-7.svg"
            heartIcon="/heart-icon@2x.png"
            listingTitle="Brightwoods Estate"
            listingSubtitle="Brightwoods Estate"
            rating="5.0"
            starIcon="/vector-8.svg"
            price="$385"
            trendIcon="/trend-icon@2x.png"
            showBestTime={false}
          />
        </section>
        <Button
          className={styles.showMoreButton}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#00c29f",
            fontSize: "16",
            borderColor: "#00c29f",
            borderRadius: "6px",
            "&:hover": { borderColor: "#00c29f" },
            width: 147,
            height: 48,
          }}
        >
          Show more
        </Button>
      </main>
      <Footer propMargin="0" propMargin1="0" propMargin2="0" />
    </div>
  );
};

export default Homepage;
