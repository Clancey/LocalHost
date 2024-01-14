import { useState } from "react";
import styles from "./CreateAccountForm.module.css";

const CreateAccountForm = () => {
  const [inputLabelsValue, setInputLabelsValue] = useState("");
  const [inputLabels1Value, setInputLabels1Value] = useState("");
  const [inputLabels2Value, setInputLabels2Value] = useState("");
  return (
    <div className={styles.signUpForm}>
      <div className={styles.formContainer}>
        <h2 className={styles.signUpTitle}>Create Account</h2>
        <form className={styles.inputFields}>
          <div className={styles.credentialsGroup}>
            <div className={styles.wrapperInputLabels}>
              <input
                className={styles.inputLabels}
                placeholder="Email address"
                type="text"
                value={inputLabelsValue}
                onChange={(event) => setInputLabelsValue(event.target.value)}
              />
              <img
                className={styles.inputIcons}
                alt=""
                src="/input-icons.svg"
              />
            </div>
            <div className={styles.wrapperInputLabels1}>
              <input
                className={styles.inputLabels1}
                placeholder="Password"
                type="text"
                value={inputLabels1Value}
                onChange={(event) => setInputLabels1Value(event.target.value)}
              />
              <img
                className={styles.iconpassword}
                alt=""
                src="/iconpassword.svg"
              />
            </div>
            <div className={styles.wrapperInputLabels2}>
              <input
                className={styles.inputLabels2}
                placeholder="Confirm password"
                type="text"
                value={inputLabels2Value}
                onChange={(event) => setInputLabels2Value(event.target.value)}
              />
              <img
                className={styles.iconpassword1}
                alt=""
                src="/iconpassword.svg"
              />
            </div>
          </div>
          <button className={styles.signUpButton}>
            <div className={styles.submitButton}>Sign up</div>
          </button>
        </form>
      </div>
      <div className={styles.separator} />
      <div className={styles.socialSignUpFrame}>
        <div className={styles.socialSignUp}>Or sign up with</div>
        <div className={styles.socialIconsGroup}>
          <div className={styles.socialButtons}>
            <div className={styles.socialMediaIcons}>
              <img
                className={styles.iconPlaceholder}
                loading="eager"
                alt=""
                src="/socialicongm.svg"
              />
            </div>
            <div className={styles.socialMediaLabels}>Google</div>
          </div>
          <div className={styles.socialButtons1}>
            <img
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook.svg"
            />
            <div className={styles.facebook}>Facebook</div>
          </div>
          <div className={styles.socialButtons2}>
            <img
              className={styles.facebookIcon1}
              loading="eager"
              alt=""
              src="/facebook1.svg"
            />
            <div className={styles.facebook1}>Apple</div>
          </div>
        </div>
      </div>
      <div className={styles.signInRedirectContainer}>
        <span>{`I already have an account. `}</span>
        <span className={styles.login}>Login</span>
      </div>
    </div>
  );
};

export default CreateAccountForm;
