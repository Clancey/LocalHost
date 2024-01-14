import FormSection from "../components/FormSection";
import StaysContainerHeader from "../components/StaysContainerHeader";
import StaysNearbyCard from "../components/StaysNearbyCard";
import SupportFooter from "../components/SupportFooter";
import styles from "./MainContainer.module.css";

const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.primaryFrame}>
        <header className={styles.header}>
          <div className={styles.headerGroup}>
            <img
              className={styles.logoIcon}
              loading="eager"
              alt=""
              src="/logo.svg"
            />
            <div className={styles.navigation}>
              <div className={styles.navLinks}>Home</div>
              <div className={styles.navLinks1}>Stays</div>
              <div className={styles.navLinks2}>Become a host</div>
            </div>
            <div className={styles.userSection}>
              <img
                className={styles.notificationsIcon}
                loading="eager"
                alt=""
                src="/alerts.svg"
              />
              <img
                className={styles.userProfileIcon}
                loading="eager"
                alt=""
                src="/avatar@2x.png"
              />
            </div>
          </div>
        </header>
        <FormSection />
      </div>
      <main className={styles.staysSection}>
        <StaysContainerHeader />
        <section className={styles.homesGrid}>
          <StaysNearbyCard
            homeImage="/home-image@2x.png"
            titleLabel="Brightwoods Cabin"
            subtitleLabel="Bridlepath, Ontario, Canada"
            ratingText="4.9"
            priceAmount="$658"
            showBestTimeContainer
            propDisplay="inline-block"
            propWidth="231px"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Urban Loft"
            subtitleLabel="Georgina Bay, Ontario, Canada"
            ratingText="4.5"
            priceAmount="$410"
            showBestTimeContainer={false}
            propDisplay="inline-block"
            propAlignItems="unset"
            propWidth="unset"
            propPadding="0px var(--padding-11xl) 0px 0px"
            propBoxSizing="border-box"
            propWhiteSpace="unset"
            propHeight="18px"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Forestville Cottages"
            subtitleLabel="Simcoe, Ontario Canada"
            ratingText="5.0"
            priceAmount="$325"
            showBestTimeContainer={false}
            propDisplay="inline-block"
            propAlignItems="unset"
            propWidth="231px"
            propPadding="unset"
            propBoxSizing="unset"
            propWhiteSpace="unset"
            propHeight="18px"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Unionville Logde"
            subtitleLabel="Markham, Ontario Canada"
            ratingText="4.6"
            priceAmount="$485"
            showBestTimeContainer
            propDisplay="flex"
            propAlignItems="center"
            propWidth="231px"
            propPadding="unset"
            propBoxSizing="unset"
            propWhiteSpace="unset"
            propHeight="unset"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Missisuaga Aistream"
            subtitleLabel="Missisauga, Ontario, Canada"
            ratingText="4.8"
            priceAmount="$502"
            showBestTimeContainer
            propDisplay="flex"
            propAlignItems="center"
            propWidth="231px"
            propPadding="unset"
            propBoxSizing="unset"
            propWhiteSpace="unset"
            propHeight="unset"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Niagara Homes"
            subtitleLabel="Niagara, Ontario, Canada"
            ratingText="4.9"
            priceAmount="$655"
            showBestTimeContainer={false}
            propDisplay="flex"
            propAlignItems="center"
            propWidth="231px"
            propPadding="unset"
            propBoxSizing="unset"
            propWhiteSpace="unset"
            propHeight="18px"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Sunny Estate"
            subtitleLabel="Barcort, Ontario Canada"
            ratingText="5.0"
            priceAmount="$320"
            showBestTimeContainer
            propDisplay="flex"
            propAlignItems="center"
            propWidth="231px"
            propPadding="unset"
            propBoxSizing="unset"
            propWhiteSpace="unset"
            propHeight="unset"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Lawrence Hills"
            subtitleLabel="Lawrence, Ontario Canada"
            ratingText="5.0"
            priceAmount="$350"
            showBestTimeContainer={false}
            propDisplay="flex"
            propAlignItems="center"
            propWidth="231px"
            propPadding="unset"
            propBoxSizing="unset"
            propWhiteSpace="unset"
            propHeight="18px"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Simcoe Lake Lodge"
            subtitleLabel="Simcoe, Ontario, Canada"
            ratingText="5.0"
            priceAmount="$395"
            showBestTimeContainer={false}
            propDisplay="flex"
            propAlignItems="center"
            propWidth="231px"
            propPadding="unset"
            propBoxSizing="unset"
            propWhiteSpace="unset"
            propHeight="18px"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Wasaga Beach Home"
            subtitleLabel="Georgina Bay, Ontario, Canada"
            ratingText="5.0"
            priceAmount="$385"
            showBestTimeContainer
            propDisplay="flex"
            propAlignItems="center"
            propWidth="unset"
            propPadding="0px var(--padding-11xl) 0px 0px"
            propBoxSizing="border-box"
            propWhiteSpace="unset"
            propHeight="unset"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Banff Hills"
            subtitleLabel="Banff, Alberta, Canada"
            ratingText="5.0"
            priceAmount="$385"
            showBestTimeContainer
            propDisplay="flex"
            propAlignItems="center"
            propWidth="231px"
            propPadding="unset"
            propBoxSizing="unset"
            propWhiteSpace="unset"
            propHeight="unset"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Creemore Canada"
            subtitleLabel="Creemore, Alberta, Canada"
            ratingText="5.0"
            priceAmount="$385"
            showBestTimeContainer={false}
            propDisplay="flex"
            propAlignItems="center"
            propWidth="231px"
            propPadding="unset"
            propBoxSizing="unset"
            propWhiteSpace="unset"
            propHeight="18px"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Kawartha Lakes"
            subtitleLabel="Kawartha, Alberta,  Canada"
            ratingText="5.0"
            priceAmount="$385"
            showBestTimeContainer={false}
            propDisplay="flex"
            propAlignItems="center"
            propWidth="231px"
            propPadding="unset"
            propBoxSizing="unset"
            propWhiteSpace="pre-wrap"
            propHeight="18px"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Revelstoke Cabin"
            subtitleLabel="Revelstoke, Alberta, Canada"
            ratingText="5.0"
            priceAmount="$385"
            showBestTimeContainer
            propDisplay="flex"
            propAlignItems="center"
            propWidth="231px"
            propPadding="unset"
            propBoxSizing="unset"
            propWhiteSpace="unset"
            propHeight="unset"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Brightwoods Estate"
            subtitleLabel="Brightwoods Estate"
            ratingText="5.0"
            priceAmount="$385"
            showBestTimeContainer={false}
            propDisplay="flex"
            propAlignItems="center"
            propWidth="231px"
            propPadding="unset"
            propBoxSizing="unset"
            propWhiteSpace="unset"
            propHeight="18px"
          />
          <StaysNearbyCard
            homeImage="/image@2x.png"
            titleLabel="Brightwoods Estate"
            subtitleLabel="Brightwoods Estate"
            ratingText="5.0"
            priceAmount="$385"
            showBestTimeContainer={false}
            propDisplay="flex"
            propAlignItems="center"
            propWidth="231px"
            propPadding="unset"
            propBoxSizing="unset"
            propWhiteSpace="unset"
            propHeight="18px"
          />
        </section>
        <button className={styles.showMoreButton}>
          <div className={styles.showMoreText}>Show more</div>
        </button>
      </main>
      <SupportFooter />
    </div>
  );
};

export default MainContainer;
