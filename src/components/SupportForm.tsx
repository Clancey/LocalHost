import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SupportForm.module.css";

type SupportFormType = {
  /** Style props */
  propFlexShrink?: CSSProperties["flexShrink"];
  propZIndex?: CSSProperties["zIndex"];
  propMargin?: CSSProperties["margin"];
  propMargin1?: CSSProperties["margin"];
  propMargin2?: CSSProperties["margin"];
};

const SupportForm: FunctionComponent<SupportFormType> = ({
  propFlexShrink,
  propZIndex,
  propMargin,
  propMargin1,
  propMargin2,
}) => {
  const footerFrameStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: propFlexShrink,
      zIndex: propZIndex,
    };
  }, [propFlexShrink, propZIndex]);

  const supportButtonStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const hostingBasicsStyle: CSSProperties = useMemo(() => {
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
    <footer className={styles.footerFrame} style={footerFrameStyle}>
      <div className={styles.hostInfoSection}>
        <div className={styles.hostingInfoFrame}>
          <div className={styles.hostingCategories}>
            <div className={styles.supportSection}>
              <div className={styles.supportButton} style={supportButtonStyle}>
                Support
              </div>
              <div className={styles.supportOptions}>Help Centre</div>
              <div className={styles.supportOptions}>AirCover</div>
              <div className={styles.supportOptions}>
                Combating discrimination
              </div>
              <div className={styles.supportOptions}>
                Supporting people with disabilities
              </div>
              <div className={styles.supportOptions}>Cencellation options</div>
              <div className={styles.supportOptions}>
                Report neighbourhood concern
              </div>
            </div>
            <div className={styles.hostingOptions}>
              <div className={styles.supportButton} style={hostingBasicsStyle}>
                Hosting
              </div>
              <div className={styles.supportOptions}>Local home</div>
              <div className={styles.supportOptions}>Cover for hosts</div>
              <div className={styles.supportOptions}>Hosting resources</div>
              <div className={styles.supportOptions}>Community forum</div>
              <div className={styles.supportOptions}>Hosting responsibly</div>
            </div>
            <div className={styles.hostingOptions1}>
              <div className={styles.supportButton} style={localhostStyle}>
                Localhost
              </div>
              <div className={styles.supportOptions}>Newsroom</div>
              <div className={styles.supportOptions}>New Features</div>
              <div className={styles.supportOptions}>Careers</div>
              <div className={styles.supportOptions}>Investres</div>
              <div className={styles.supportOptions}>Gift cards</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.legalFrame}>
        <div className={styles.copyrightSection}>
          <div className={styles.copyrightFrame}>
            <div className={styles.copyrightText}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.legalLinks}>
              <div className={styles.legalOptions}>Privacy Policy</div>
              <div className={styles.legalOptions}>{`Terms & Conditions`}</div>
              <div className={styles.legalOptions}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SupportForm;
