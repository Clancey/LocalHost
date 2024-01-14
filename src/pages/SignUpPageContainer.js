import Header from "../components/Header";
import CreateAccountForm from "../components/CreateAccountForm";
import styles from "./SignUpPageContainer.module.css";

const SignUpPageContainer = () => {
  return (
    <div className={styles.signUpPageContainer}>
      <Header />
      <main className={styles.signUpSection}>
        <div className={styles.signUpFrame}>
          <CreateAccountForm />
        </div>
      </main>
      <footer className={styles.footerFrame}>
        <div className={styles.footerContainer}>
          <div className={styles.copyrightInfo}>
            <div className={styles.copyrightText}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.policyLink}>Privacy Policy</div>
              <div className={styles.policyLink1}>{`Terms & Conditions`}</div>
              <div className={styles.policyLink2}>Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPageContainer;
