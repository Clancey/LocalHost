import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./ReviewCardForm.module.css";

type ReviewCardFormType = {
  rating?: string;
  reviewText?: string;
};

const ReviewCardForm: FunctionComponent<ReviewCardFormType> = ({
  rating,
  reviewText,
}) => {
  const [reviewNamesDatesValue, setReviewNamesDatesValue] = useState<
    string | null
  >(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.reviewItems}>
        <div className={styles.reviewProfiles}>
          <div>
            <DatePicker
              label="Johnny Cash"
              value={reviewNamesDatesValue}
              onChange={(newValue: any) => {
                setReviewNamesDatesValue(newValue);
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
          <div className={styles.emptyState}>
            <div className={styles.ratingIcon}>{rating}</div>
            <img
              className={styles.ratingVectorIcon}
              loading="eager"
              alt=""
              src="/vector11.svg"
            />
          </div>
        </div>
        <div className={styles.reviewText}>{reviewText}</div>
      </div>
    </LocalizationProvider>
  );
};

export default ReviewCardForm;
