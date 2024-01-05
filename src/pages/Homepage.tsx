import { FunctionComponent } from "react";
import SectionForm from "../components/SectionForm";
import Container from "../components/Container";
import CardSection1 from "../components/CardSection1";
import MississaugaAirstreamCard from "../components/MississaugaAirstreamCard";
import CardSection from "../components/CardSection";
import SupportForm from "../components/SupportForm";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.appHeaderOldParent}>
        <header className={styles.appHeaderOld}>
          <div className={styles.headerContent}>
            <img
              className={styles.logoIcon}
              loading="eager"
              alt=""
              src="/logo.svg"
            />
            <div className={styles.navLinks}>
              <div className={styles.home}>Home</div>
              <div className={styles.home}>Stays</div>
              <div className={styles.becomeAHost}>Become a host</div>
            </div>
            <div className={styles.loginSection}>
              <img
                className={styles.alertsIcon}
                loading="eager"
                alt=""
                src="/alerts.svg"
              />
              <img className={styles.avatarIcon} loading="eager" alt="" />
            </div>
          </div>
        </header>
        <SectionForm />
      </div>
      <main className={styles.frameParent}>
        <Container />
        <CardSection1
          image="/image@2x.png"
          listingTitle="Brightwoods Cabin"
          listingSubtitle="Bridlepath, Ontario, Canada"
          rating="4.9"
          starIcon="/star-icon@2x.png"
          price="$658"
          image1="/image11@2x.png"
          listingTitle1="Urban Loft"
          listingSubtitle1="c"
          rating1="4.5"
          starIcon1="/star-icon@2x.png"
          price1="$410"
          image2="/image21@2x.png"
          listingTitle2="Forestville Cottages"
          listingSubtitle2="Simcoe, Ontario Canada"
          starIcon2="/star-icon@2x.png"
          price2="$325"
          image3="/image31@2x.png"
          listingTitle3="Unionville Lodge"
          listingSubtitle3="Markham, Ontario Canada"
          rating2="4.6"
          starIcon3="/star-icon@2x.png"
          price3="$485"
          listingInfoObjectFit="cover"
          listingContJustifyContent="space-between"
          listingContGap="0px"
          listingContRowGap="20px"
          listingTitleWidth="179px"
          propObjectFit="cover"
          propObjectFit1="cover"
          propObjectFit2="cover"
          propJustifyContent="space-between"
          propGap="0px"
          propRowGap="20px"
          propWidth="179px"
        />
        <MississaugaAirstreamCard />
        <CardSection
          imageDescription="/image71@2x.png"
          locationName="Simcoe Lake Lodge"
          locationImageUrl="Simcoe, Ontario, Canada"
          price="$395"
          imageDimensions="/image81@2x.png"
          propertyImageUrl="Wasaga Beach Home"
          locationDescription="Georgina Bay, Ontario, Canada"
          imageDimensions2="/image91@2x.png"
          propertyName="Banff Hills"
          propertyLocation="Banff, Alberta, Canada"
          propertyDimensions="/star-icon@2x.png"
          imageDimensions3="/image101@2x.png"
          propertyName2="Creemore Canada"
          propertyLocationName="Creemore, Alberta, Canada"
          propertyDimensions2="/star-icon@2x.png"
          propZIndex="1"
          propZIndex1="1"
          propFlexShrink="0"
          propPadding="0px var(--padding-7xl) 0px 0px"
          propBoxSizing="border-box"
          propJustifyContent="space-between"
          propGap="0px"
          propRowGap="20px"
          propWidth1="179px"
          propZIndex2="1"
          propObjectFit="cover"
          propZIndex3="1"
          propObjectFit1="cover"
        />
        <CardSection1
          image="/image111@2x.png"
          listingTitle="Kawartha Lakes"
          listingSubtitle="Kawartha, Alberta,  Canada"
          rating="5.0"
          starIcon="/vector2.svg"
          price="$385"
          image1="/image121@2x.png"
          listingTitle1="Revelstoke Cabin"
          listingSubtitle1="Revelstoke, Alberta, Canada"
          rating1="5.0"
          starIcon1="/vector2.svg"
          price1="$385"
          image2="/image131@2x.png"
          listingTitle2="Brightwoods Estate"
          listingSubtitle2="Brightwoods Estate"
          starIcon2="/vector2.svg"
          price2="$385"
          image3="/image141@2x.png"
          listingTitle3="Brightwoods Estate"
          listingSubtitle3="Brightwoods Estate"
          rating2="5.0"
          starIcon3="/vector2.svg"
          price3="$385"
          frameDivWhiteSpace="pre-wrap"
          listingInfoObjectFit="unset"
          listingContJustifyContent="flex-start"
          listingContGap="20px"
          listingContRowGap="unset"
          listingTitleWidth="unset"
          listingTitleFlex="1"
          propObjectFit="unset"
          propObjectFit1="unset"
          propObjectFit2="unset"
          propJustifyContent="flex-start"
          propGap="20px"
          propRowGap="unset"
          propWidth="unset"
          propFlex="1"
        />
        <button className={styles.searchFlightsButton}>
          <div className={styles.button}>Show more</div>
        </button>
      </main>
      <SupportForm
        propFlexShrink="unset"
        propZIndex="1"
        propMargin="0"
        propMargin1="0"
        propMargin2="0"
      />
    </div>
  );
};

export default Homepage;
