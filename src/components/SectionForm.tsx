import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./SectionForm.module.css";

const SectionForm: FunctionComponent = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] = useState<
    string | null
  >(null);
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] = useState<
    string | null
  >(null);
  const [frameInput1Value, setFrameInput1Value] = useState("");
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.findAHostForEveryJourneyParent}>
            <b className={styles.findAHostContainer}>
              <span>{`Find a `}</span>
              <span className={styles.host}>host</span>
              <span> for every journey</span>
            </b>
            <h3 className={styles.discoverTheBest}>
              Discover the best local rental properties that fits your every
              travel needs
            </h3>
          </div>
          <div className={styles.component1}>
            <div className={styles.wrapperFrame31}>
              <input
                className={styles.wrapperFrame31Child}
                placeholder="Accommodation"
                type="text"
                value={frameInputValue}
                onChange={(event) => setFrameInputValue(event.target.value)}
              />
              <img className={styles.iconhome} alt="" src="/iconhome@2x.png" />
            </div>
            <div className={styles.grouped}>
              <div>
                <DatePicker
                  label="Check-in"
                  value={frameDateTimePickerValue}
                  onChange={(newValue: any) => {
                    setFrameDateTimePickerValue(newValue);
                  }}
                  slotProps={{
                    textField: {
                      variant: "filled",
                      size: "large",
                      fullWidth: true,
                    },
                  }}
                />
              </div>
              <div>
                <DatePicker
                  label="Check-out"
                  value={frameDateTimePicker1Value}
                  onChange={(newValue: any) => {
                    setFrameDateTimePicker1Value(newValue);
                  }}
                  slotProps={{
                    textField: {
                      variant: "filled",
                      size: "large",
                      fullWidth: true,
                    },
                  }}
                />
              </div>
              <div className={styles.wrapperFrame39}>
                <input
                  className={styles.wrapperFrame31Child}
                  placeholder="Guest"
                  type="text"
                  value={frameInput1Value}
                  onChange={(event) => setFrameInput1Value(event.target.value)}
                />
                <img
                  className={styles.iconhome}
                  alt=""
                  src="/iconuser@2x.png"
                />
              </div>
            </div>
            <button className={styles.searchFlightsButton}>
              <img
                className={styles.iconsearch}
                alt=""
                src="/iconsearch@2x.png"
              />
              <div className={styles.button}>Search</div>
            </button>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SectionForm;
