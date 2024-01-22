import { FunctionComponent } from "react";
import styles from "./Footer1.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.hostingLocalhost}>
        <div className={styles.localhome}>
          <div className={styles.newsroom}>
            <div className={styles.privacyTerms}>
              <div className={styles.support}>Support</div>
              <div className={styles.helpCentre}>Help Centre</div>
              <div className={styles.aircover}>AirCover</div>
              <div className={styles.combatingDiscrimination}>
                Combating discrimination
              </div>
              <div className={styles.supportingPeopleWith}>
                Supporting people with disabilities
              </div>
              <div className={styles.cencellationOptions}>
                Cencellation options
              </div>
              <div className={styles.reportNeighbourhoodConcern}>
                Report neighbourhood concern
              </div>
            </div>
            <div className={styles.coverforhosts}>
              <div className={styles.hosting}>Hosting</div>
              <div className={styles.localHome}>Local home</div>
              <div className={styles.coverForHosts}>Cover for hosts</div>
              <div className={styles.hostingResources}>Hosting resources</div>
              <div className={styles.communityForum}>Community forum</div>
              <div className={styles.hostingResponsibly}>
                Hosting responsibly
              </div>
            </div>
            <div className={styles.coverforhosts1}>
              <div className={styles.localhost}>Localhost</div>
              <div className={styles.newsroom1}>Newsroom</div>
              <div className={styles.newFeatures}>New Features</div>
              <div className={styles.careers}>Careers</div>
              <div className={styles.investres}>Investres</div>
              <div className={styles.giftCards}>Gift cards</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hostingResponsibly1}>
        <div className={styles.cancellationOptions}>
          <div className={styles.reportNeighbourhoodConcern1}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.privacyPolicyTermsCondition}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
