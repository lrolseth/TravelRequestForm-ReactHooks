import React from "react";
import ReactDatePicker from "react-datepicker";
import { format } from "date-fns";
import { ErrorMessage } from "react-hook-form";
import { Error } from "./Error";

import "react-datepicker/dist/react-datepicker.css";

// try {
// } catch (e) {}

const start = new Date();
export default function MyDatePicker({
  setValue,
  label,
  triggerValidation,
  errors,
  field
}) {
  const [startDate, setStartDate] = React.useState("");

  const ref = React.useRef(null);
  // React.useEffect(() => {
  //   // const isDateErrorTheLastOne =
  //   //   Object.keys(errors).length === 1 &&
  //   //   Object.keys(errors).join("") === "date";

  //   // if (ref && isDateErrorTheLastOne) {
  //   //   return ref.current.input.focus();
  //   // }

  //   if (ref && errors.date) {
  //     ref.current.input.focus();
  //     // ref.current.setOpen(false);
  //   }
  //   console.log(ref.current.input);
  // }, [errors.date]);

  return (
    <span className="input-container">
      <label htmlFor="date" className="label">
        {label}
      </label>
      <ReactDatePicker
        id={field}
        ref={ref}
        name={field}
        selected={startDate}
        required
        onBlur={() => {
          triggerValidation("date");
        }}
        onChange={date => {
          setStartDate(new Date(date));
          const formattedDate = format(new Date(date), "dd/MM/yyyy");
          setValue("date", formattedDate);
          triggerValidation("date");
        }}
        dateFormat="dd/MM/yyyy"
        minDate={start}
        onFocus={e => {
          if (e) {
            e.target.readOnly = true;
          }
        }}
        withPortal
        placeholderText="DD/MM/YYYY"
      />
      <ErrorMessage errors={errors} name="date" as={<Error />} />
    </span>
  );
}
