import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./Form.module.css";

const Form: FunctionComponent = () => {
  return (
    <div className={styles.form}>
      <div className={styles.createAccountText}>
        <h2 className={styles.createAccount}>Create Account</h2>
        <form className={styles.form1}>
          <div className={styles.formFields}>
            <TextField
              className={styles.email}
              placeholder="Email address"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="20px" height="20px" src="/iconaccount.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "51px",
                  backgroundColor: "#fff",
                  paddingRight: "18.826550102233796px",
                },
                "& .MuiInputBase-input": { color: "#787878" },
              }}
            />
            <TextField
              className={styles.password}
              placeholder="Password"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="20px" height="20px" src="/iconpassword.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "51px",
                  backgroundColor: "#fff",
                  paddingRight: "18.826550102233796px",
                },
                "& .MuiInputBase-input": { color: "#787878" },
              }}
            />
            <TextField
              className={styles.confirmPassword}
              placeholder="Confirm password"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="20px" height="20px" src="/iconpassword-1.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "51px",
                  backgroundColor: "#fff",
                  paddingRight: "18.826550102233796px",
                },
                "& .MuiInputBase-input": { color: "#787878" },
              }}
            />
          </div>
          <Button
            className={styles.searchFlightsButton}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00c29f",
              borderRadius: "6px",
              "&:hover": { background: "#00c29f" },
              width: 160,
              height: 52,
            }}
          >
            Sign up
          </Button>
        </form>
      </div>
      <div className={styles.lineSeparator} />
      <div className={styles.orSignUpWithFrame}>
        <div className={styles.orSignUp}>Or sign up with</div>
        <div className={styles.socialLogindefaultCopyParent}>
          <div className={styles.socialLogindefaultCopy}>
            <div className={styles.facebook}>
              <img
                className={styles.socialIcongm}
                loading="eager"
                alt=""
                src="/socialicongm.svg"
              />
            </div>
            <div className={styles.facebook1}>Google</div>
          </div>
          <div className={styles.socialLogindefaultCopy1}>
            <img
              className={styles.facebookIcon}
              loading="eager"
              alt=""
              src="/facebook.svg"
            />
            <div className={styles.facebook2}>Facebook</div>
          </div>
          <div className={styles.socialLogindefaultCopy2}>
            <img
              className={styles.facebookIcon1}
              alt=""
              src="/facebook-1.svg"
            />
            <div className={styles.facebook3}>Apple</div>
          </div>
        </div>
      </div>
      <div className={styles.iAlreadyHaveContainer}>
        <span>{`I already have an account. `}</span>
        <span className={styles.login}>Login</span>
      </div>
    </div>
  );
};

export default Form;
