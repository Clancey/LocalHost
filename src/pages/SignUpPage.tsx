import { FunctionComponent } from "react";
import Framesignup from "../components/Framesignup";
import Form from "../components/Form";
import FooterLinksContainer from "../components/FooterLinksContainer";
import styles from "./SignUpPage.module.css";

const SignUpPage: FunctionComponent = () => {
  return (
    <div className={styles.signUpPage}>
      <Framesignup />
      <main className={styles.loginSections}>
        <div className={styles.framelogin}>
          <Form />
        </div>
      </main>
      <FooterLinksContainer />
    </div>
  );
};

export default SignUpPage;
