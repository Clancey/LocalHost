import styles from "./SupportFooter.module.css";

const SupportFooter = () => {
  return (
    <footer className={styles.communitySection}>
      <div className={styles.communityHeader}>
        <div className={styles.hostCommunitySection}>
          <div className={styles.hostOptionsGrid}>
            <div className={styles.supportOptionsGrid}>
              <h3 className={styles.supportHeading}>Support</h3>
              <div className={styles.supportLinks}>Help Centre</div>
              <div className={styles.supportLinks1}>AirCover</div>
              <div className={styles.supportLinks2}>
                Combating discrimination
              </div>
              <div className={styles.supportLinks3}>
                Supporting people with disabilities
              </div>
              <div className={styles.supportLinks4}>Cencellation options</div>
              <div className={styles.supportLinks5}>
                Report neighbourhood concern
              </div>
            </div>
            <div className={styles.hostCategoryLinks}>
              <h3 className={styles.hostingBasics}>Hosting</h3>
              <div className={styles.localNews}>Local home</div>
              <div className={styles.hostProtection}>Cover for hosts</div>
              <div className={styles.resourceLinks}>Hosting resources</div>
              <div className={styles.communityEngagement}>Community forum</div>
              <div className={styles.responsibleHosting}>
                Hosting responsibly
              </div>
            </div>
            <div className={styles.hostCategoryLinks1}>
              <h3 className={styles.localhost}>Localhost</h3>
              <div className={styles.newsroom}>Newsroom</div>
              <div className={styles.newFeatures}>New Features</div>
              <div className={styles.careers}>Careers</div>
              <div className={styles.investres}>Investres</div>
              <div className={styles.giftCards}>Gift cards</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.legalInfoContainer}>
          <div className={styles.copyrightNotice}>
            <div className={styles.copyrightText}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.legalLinksContainer}>
              <div className={styles.legalLinks}>Privacy Policy</div>
              <div className={styles.legalLinks1}>{`Terms & Conditions`}</div>
              <div className={styles.legalLinks2}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SupportFooter;
