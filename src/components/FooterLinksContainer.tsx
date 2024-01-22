import { FunctionComponent } from "react";
import styles from "./FooterLinksContainer.module.css";

const FooterLinksContainer: FunctionComponent = () => {
  return (
    <footer className={styles.footerLinksContainer}>
      <div className={styles.privacyPolicyTermsCondition}>
        <div className={styles.contactUsLink}>
          <div className={styles.localhostIncAll}>
            © 2023 Localhost, Inc. All Rights Reserved
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.termsConditions}>{`Terms & Conditions`}</div>
            <div className={styles.contactUs}>Contact us</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinksContainer;
