import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

type FooterType = {
  /** Style props */
  propMargin?: CSSProperties["margin"];
  propMargin1?: CSSProperties["margin"];
  propMargin2?: CSSProperties["margin"];
};

const Footer: FunctionComponent<FooterType> = ({
  propMargin,
  propMargin1,
  propMargin2,
}) => {
  const supportStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const hostingStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  const localhostStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footer1}>
          <div className={styles.frameBanner}>
            <div className={styles.helpCentreSupportFrame}>
              <h3 className={styles.support} style={supportStyle}>
                Support
              </h3>
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
            <div className={styles.helpCenterFrame}>
              <h3 className={styles.hosting} style={hostingStyle}>
                Hosting
              </h3>
              <div className={styles.localHome}>Local home</div>
              <div className={styles.coverForHosts}>Cover for hosts</div>
              <div className={styles.hostingResources}>Hosting resources</div>
              <div className={styles.communityForum}>Community forum</div>
              <div className={styles.hostingResponsibly}>
                Hosting responsibly
              </div>
            </div>
            <div className={styles.helpCenterFrame1}>
              <h3 className={styles.localhost} style={localhostStyle}>
                Localhost
              </h3>
              <div className={styles.newsroom}>Newsroom</div>
              <div className={styles.newFeatures}>New Features</div>
              <div className={styles.careers}>Careers</div>
              <div className={styles.investres}>Investres</div>
              <div className={styles.giftCards}>Gift cards</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cancellationOptionsFrame}>
        <div className={styles.reportNeighborhoodConcernFr}>
          <div className={styles.privacyPolicyTermsContactF}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.frameSupport}>
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
