import { FunctionComponent, useState } from "react";
import styles from "./CreateAccountFormFrame.module.css";

const CreateAccountFormFrame: FunctionComponent = () => {
  const [inputFieldsValue, setInputFieldsValue] = useState("");
  const [inputFields1Value, setInputFields1Value] = useState("");
  const [inputFields2Value, setInputFields2Value] = useState("");
  return (
    <div className={styles.accountFormFrame}>
      <div className={styles.accountFormFields}>
        <h2 className={styles.createAccountTitle}>Create Account</h2>
        <form className={styles.inputFieldsContainer}>
          <div className={styles.userCredentialsFields}>
            <div className={styles.wrapperInputFields}>
              <input
                className={styles.inputFields}
                placeholder="Email address"
                type="text"
                value={inputFieldsValue}
                onChange={(event) => setInputFieldsValue(event.target.value)}
              />
              <img
                className={styles.inputIcons}
                alt=""
                src="/input-icons@2x.png"
              />
            </div>
            <div className={styles.wrapperInputFields}>
              <input
                className={styles.inputFields}
                placeholder="Password"
                type="text"
                value={inputFields1Value}
                onChange={(event) => setInputFields1Value(event.target.value)}
              />
              <img
                className={styles.iconpassword}
                alt=""
                src="/iconpassword@2x.png"
              />
            </div>
            <div className={styles.wrapperInputFields}>
              <input
                className={styles.inputFields}
                placeholder="Confirm password"
                type="text"
                value={inputFields2Value}
                onChange={(event) => setInputFields2Value(event.target.value)}
              />
              <img
                className={styles.iconpassword1}
                alt=""
                src="/iconpassword1@2x.png"
              />
            </div>
          </div>
          <button className={styles.signUpButtonFrame}>
            <div className={styles.signUpButton}>Sign up</div>
          </button>
        </form>
      </div>
      <div className={styles.separatorLine} />
      <div className={styles.socialSignUpContainer}>
        <div className={styles.socialSignUp}>Or sign up with</div>
        <div className={styles.socialButtonsFrame}>
          <div className={styles.socialButtons}>
            <div className={styles.socialIcons}>
              <img
                className={styles.socialIcon}
                loading="eager"
                alt=""
                src="/socialicongm.svg"
              />
            </div>
            <div className={styles.socialButtonText}>Google</div>
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
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook11.svg"
            />
            <div className={styles.socialButtonText}>Apple</div>
          </div>
        </div>
      </div>
      <div className={styles.existingAccountTextContainer}>
        <span>{`I already have an account. `}</span>
        <span className={styles.login}>Login</span>
      </div>
    </div>
  );
};

export default CreateAccountFormFrame;
