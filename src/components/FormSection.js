import { useState, useCallback } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import styles from "./FormSection.module.css";

const FormSection = () => {
  const [searchFieldsValue, setSearchFieldsValue] = useState("");
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] =
    useState(null);
  const [guestsFieldValue, setGuestsFieldValue] = useState("");
  const navigate = useNavigate();

  const onSearchButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.heroSection}>
        <div className={styles.searchWrapper}>
          <div className={styles.searchPrompt}>
            <b className={styles.searchTitle}>
              <span>{`Find a `}</span>
              <span className={styles.host}>host</span>
              <span> for every journey</span>
            </b>
            <h3 className={styles.searchSubtitle}>
              Discover the best local rental properties that fits your every
              travel needs
            </h3>
          </div>
          <div className={styles.searchBar}>
            <div className={styles.wrapperSearchFields}>
              <input
                className={styles.searchFields}
                placeholder="Accommodation"
                type="text"
                value={searchFieldsValue}
                onChange={(event) => setSearchFieldsValue(event.target.value)}
              />
              <img
                className={styles.locationFieldIcon}
                alt=""
                src="/location-field.svg"
              />
            </div>
            <div className={styles.searchFields1}>
              <div className={styles.wrapper}>
                <DatePicker
                  label="Check-in"
                  value={frameDateTimePickerValue}
                  onChange={(newValue) => {
                    setFrameDateTimePickerValue(newValue);
                  }}
                  slotProps={{
                    textField: {
                      variant: "outlined",
                      size: "medium",
                      fullWidth: true,
                    },
                  }}
                />
              </div>
              <div className={styles.container}>
                <DatePicker
                  label="Check-out"
                  value={frameDateTimePicker1Value}
                  onChange={(newValue) => {
                    setFrameDateTimePicker1Value(newValue);
                  }}
                  slotProps={{
                    textField: {
                      variant: "outlined",
                      size: "medium",
                      fullWidth: true,
                    },
                  }}
                />
              </div>
              <div className={styles.wrapperGuestsField}>
                <input
                  className={styles.guestsField}
                  placeholder="Guest"
                  type="text"
                  value={guestsFieldValue}
                  onChange={(event) => setGuestsFieldValue(event.target.value)}
                />
                <img className={styles.userIcon} alt="" src="/user-icon.svg" />
              </div>
            </div>
            <button
              className={styles.searchButton}
              onClick={onSearchButtonClick}
            >
              <img
                className={styles.searchIcon}
                alt=""
                src="/search-icon.svg"
              />
              <div className={styles.actionButton}>Search</div>
            </button>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default FormSection;
