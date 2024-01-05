import { FunctionComponent } from "react";
import Header from "../components/Header";
import CreateAccountFormFrame from "../components/CreateAccountFormFrame";
import styles from "./SignUpPageFrame.module.css";

const SignUpPageFrame: FunctionComponent = () => {
  return (
    <div className={styles.signUpPageFrame}>
      <Header />
      <main className={styles.signUpSection}>
        <div className={styles.signUpFormContainer}>
          <CreateAccountFormFrame />
        </div>
      </main>
      <footer className={styles.footerFrame}>
        <div className={styles.footerContainer}>
          <div className={styles.copyrightInfo}>
            <div className={styles.copyrightText}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.linkList}>Privacy Policy</div>
              <div className={styles.linkList}>{`Terms & Conditions`}</div>
              <div className={styles.linkList}>Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPageFrame;
