import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import ReactDOM from "react-dom";

import schema from "./schemas/SignupFormSchema";

//import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SwitchInput from "./components/SwitchInput";
import TextInput from "./components/TextInput";
import SelectInput from "./components/SelectInput";
import DatePicker from "./components/DatePicker";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import id from "uuid/v1";
import { addYears } from "date-fns";

//import MenuItem from "@material-ui/core/MenuItem";

import "./styles.css";

export default function Air(
  props,
  register,
  item,
  itemID,
  index,
  errors,
  airData,
  setAirData,
  clearError
) {
  //const [airData, setAirData] = useState([]);
  const removeAir = index => {
    setAirData([...airData.slice(0, index), ...airData.slice(index + 1)]);
  };

  return (
    <div className="border row">
      <div className="col-md-10 form-inline">
        <div className="col-md-6">
          <div className="form-inline">
            <TextInput
              props={props}
              field="DepartCity"
              name={`air${itemID}.DepartCity`}
              label="From City or Airport"
            />

            <DatePicker
              props={props}
              field="DepartDate"
              name={`air${itemID}.DepartDate`}
              label="Departure Date"
              // defaultValue="2019-05-09T00:00:00-04:00"
              params={{
                format: "E MMM dd yyyy",
                minDate: new Date(),
                maxDate: addYears(new Date(), 1)
              }}
            />
            <SelectInput
              props={props}
              field="DepartTime"
              label="Time"
              name={`air${itemID}.DepartTime`}
              defaultValue={"Anytime"}
              options={[
                {
                  value: "Anytime",
                  label: "Anytime"
                },
                { value: "Morning", label: "Morning" },
                {
                  value: "Afternoon",
                  label: "Afternoon"
                },
                { value: "Evening", label: "Evening" }
              ]}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-inline">
            <TextInput
              props={props}
              field="ReturnCity"
              name={`air${itemID}.ReturnCity`}
              label="To City or Airport"
            />
            {/* <MyDatePicker
label="Departure Date"
name={`air${itemID}.ReturnDate`}
{...props}
/> */}
            <DatePicker
              props={props}
              field="ReturnDate"
              name={`air${itemID}.ReturnDate`}
              label="Return Date"
              // defaultValue="2019-05-09T00:00:00-04:00"
              params={{
                format: "E MMM dd yyyy",
                minDate: new Date(),
                maxDate: addYears(new Date(), 1)
              }}
            />

            <SelectInput
              props={props}
              field="ReturnTime"
              label="Time"
              name={`air${itemID}.ReturnTime`}
              defaultValue={"Anytime"}
              options={[
                {
                  value: "Anytime",
                  label: "Anytime"
                },
                { value: "Morning", label: "Morning" },
                {
                  value: "Afternoon",
                  label: "Afternoon",
                  selected: false
                },
                { value: "Evening", label: "Evening" }
              ]}
            />
          </div>
        </div>
      </div>
      <div className="col-md-2 align-middle">
        <br />
        <div className="align-middle">
          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={() => removeAir(index)}
          >
            Delete segment
          </button>
        </div>
      </div>
    </div>
  );
}
