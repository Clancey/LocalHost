import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import Form from "../components/Form";
import styles from "./SignUpPage.module.css";

const SignUpPage: FunctionComponent = () => {
  return (
    <div className={styles.signUpPage}>
      <FrameComponent />
      <main className={styles.loginSections}>
        <div className={styles.frameLoginSection}>
          <Form />
        </div>
      </main>
      <footer className={styles.signUpPageInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.privacyPolicyParent}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
