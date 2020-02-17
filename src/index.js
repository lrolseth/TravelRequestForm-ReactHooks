import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

export default function App() {
  const {
    register,
    errors,
    handleSubmit,
    formState,
    clearError,
    triggerValidation,
    setValue
  } = useForm({
    mode: "onChange",
    defaultValues: {
      // airFields: [{ id: id() }]  This is how to add a default row
    }
  });

  const props = {
    register,
    errors,
    clearError,
    schema,
    triggerValidation,
    setValue
  };

  // ******  Air   ***************************
  const [airData, setAirData] = useState([]);
  const [isAirHidden, setAirHidden] = useState(true);
  const hiddenAirDetails = isAirHidden ? "none" : "inline";

  const appendAir = () => {
    setAirData([...airData, { id: id() }]);
  };
  const removeAir = index => {
    setAirData([...airData.slice(0, index), ...airData.slice(index + 1)]);
  };
  const removeAirAll = index => {
    setAirData([]);
  };
  const handleAirToggle = checkedValue => {
    setAirHidden(!isAirHidden);

    if (checkedValue) {
      //add a row to air
      appendAir({ name: "appendAir" });
    } else {
      //clear the entire air fieldArray
      removeAirAll();
    }
  };

  // ******  Hotel   ***************************
  const [hotelData, setHotelData] = useState([]);
  const [isHotelHidden, setHotelHidden] = useState(true);
  const hiddenHotelDetails = isHotelHidden ? "none" : "inline";

  const appendHotel = () => {
    setHotelData([...hotelData, { id: id() }]);
  };
  const removeHotel = index => {
    setHotelData([...hotelData.slice(0, index), ...hotelData.slice(index + 1)]);
  };
  const removeHotelAll = index => {
    setHotelData([]);
  };
  const handleHotelToggle = checkedValue => {
    setHotelHidden(!isHotelHidden);

    if (checkedValue) {
      //add a row to hotel
      appendHotel({ name: "appendHotel" });
    } else {
      //clear the entire hotel fieldArray
      removeHotelAll();
    }
  };

  // ******  Car   ***************************
  const [carData, setCarData] = useState([]);
  const [isCarHidden, setCarHidden] = useState(true);
  const hiddenCarDetails = isCarHidden ? "none" : "inline";

  const appendCar = () => {
    setCarData([...carData, { id: id() }]);
  };
  const removeCar = index => {
    setCarData([...carData.slice(0, index), ...carData.slice(index + 1)]);
  };
  const removeCarAll = index => {
    setCarData([]);
  };
  const handleCarToggle = checkedValue => {
    setCarHidden(!isCarHidden);

    if (checkedValue) {
      //add a row to car
      appendCar({ name: "appendCar" });
    } else {
      //clear the entire car fieldArray
      removeCarAll();
    }
  };

  // ******  Rail   ***************************
  const [railData, setRailData] = useState([]);
  const [isRailHidden, setRailHidden] = useState(true);
  const hiddenRailDetails = isRailHidden ? "none" : "inline";

  const appendRail = () => {
    setRailData([...railData, { id: id() }]);
  };
  const removeRail = index => {
    setRailData([...railData.slice(0, index), ...railData.slice(index + 1)]);
  };
  const removeRailAll = index => {
    setRailData([]);
  };
  const handleRailToggle = checkedValue => {
    setRailHidden(!isRailHidden);

    if (checkedValue) {
      //add a row to rail
      appendRail({ name: "appendRail" });
    } else {
      //clear the entire rail fieldArray
      removeRailAll();
    }
  };

  // ************************************

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column">
        <h2>Travel Request Form</h2>

        <div>
          <div className="m-0">
            <div className="form-group">
              <div>
                <TextInput
                  props={props}
                  field="TName"
                  label="Traveler Full Legal Name"
                />
              </div>
              <div>
                <TextInput props={props} field="TDSID" label="Traveler DSID" />
              </div>
              <div>
                <TextInput
                  props={props}
                  field="TEmail"
                  label="Traveler Email"
                />
              </div>
              <div>
                <TextInput
                  props={props}
                  field="TPhone"
                  label="Traveler Phone"
                />
              </div>
              <div>
                <label>Country of Residence</label>
                <select className="form-control" name="TCountry">
                  <option value="">Select...</option>
                  <option value="apple">apple</option>
                  <option value="banana">banana</option>
                </select>
              </div>
              <div>
                <label>Business Unit</label>
                <select className="form-control" name="TPlatformBusinessUnit">
                  <option value="">Select...</option>
                  <option value="apple">apple</option>
                  <option value="banana">banana</option>
                </select>
              </div>
              <div>
                <label>Purpose of Travel</label>
                <select className="form-control" name="TPurpose">
                  <option value="">Select...</option>
                  <option value="apple">apple</option>
                  <option value="banana">banana</option>
                </select>
              </div>
            </div>

            {/* Air */}
            <div className="form-group">
              <label className="checkbox-inline">
                <SwitchInput
                  props={props}
                  field="airCheck"
                  label="Include Air"
                  defaultValue={false}
                  onChange={(e, c) => handleAirToggle(c)}
                />
              </label>

              <div
                className="form-group ml-4"
                style={{ display: hiddenAirDetails }}
              >
                <h4>Flight(s)</h4>
                {airData.map((item, index) => {
                  return (
                    <fieldset name={item.id} key={item.id}>
                      <div className="border row">
                        <div className="col-md-10 form-inline">
                          <div className="col-md-6">
                            <div className="form-inline">
                              <TextInput
                                props={props}
                                field="DepartCity"
                                name={`air${item.id}.DepartCity`}
                                label="From City or Airport"
                              />

                              <DatePicker
                                props={props}
                                field="DepartDate"
                                name={`air${item.id}.DepartDate`}
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
                                name={`air${item.id}.DepartTime`}
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
                                name={`air${item.id}.ReturnCity`}
                                label="To City or Airport"
                              />
                              {/* <MyDatePicker
  label="Departure Date"
  name={`air${item.id}.ReturnDate`}
  {...props}
/> */}
                              <DatePicker
                                props={props}
                                field="ReturnDate"
                                name={`air${item.id}.ReturnDate`}
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
                                name={`air${item.id}.ReturnTime`}
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
                    </fieldset>
                  );
                })}

                <div className="float-right">
                  <br />
                  <section>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => {
                        appendAir({ name: "appendAir" });
                      }}
                    >
                      Add air segment
                    </button>
                  </section>
                </div>
              </div>
            </div>

            {/* Hotel */}
            <div className="form-group">
              <label className="checkbox-inline">
                <SwitchInput
                  props={props}
                  field="hotelCheck"
                  label="Include Hotel"
                  defaultValue={false}
                  onChange={(e, c) => handleHotelToggle(c)}
                />
              </label>

              <div
                className="form-group ml-4"
                style={{ display: hiddenHotelDetails }}
              >
                <h4>Hotel</h4>
                {hotelData.map((item, index) => {
                  return (
                    <fieldset name={item.id} key={item.id}>
                      <div className="border row">
                        <div className="col-md-10 form-inline">
                          <div className="col-md-12">
                            <div className="form-inline">
                              <TextInput
                                props={props}
                                field="DepartCity"
                                name={`hotel${item.id}.DepartCity`}
                                label="Location"
                              />

                              <DatePicker
                                props={props}
                                field="DepartDate"
                                name={`hotel${item.id}.DepartDate`}
                                label="Check-in Date"
                                // defaultValue="2019-05-09T00:00:00-04:00"
                                params={{
                                  format: "E MMM dd yyyy",
                                  minDate: new Date(),
                                  maxDate: addYears(new Date(), 1)
                                }}
                              />
                              <DatePicker
                                props={props}
                                field="ReturnDate"
                                name={`hotel${item.id}.ReturnDate`}
                                label="Check-out Date"
                                // defaultValue="2019-05-09T00:00:00-04:00"
                                params={{
                                  format: "E MMM dd yyyy",
                                  minDate: new Date(),
                                  maxDate: addYears(new Date(), 1)
                                }}
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
                              onClick={() => removeHotel(index)}
                            >
                              Delete segment
                            </button>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  );
                })}

                <div className="float-right">
                  <br />
                  <section>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => {
                        appendHotel({ name: "appendHotel" });
                      }}
                    >
                      Add hotel segment
                    </button>
                  </section>
                </div>
              </div>
            </div>

            {/* Car */}
            <div className="form-group">
              <label className="checkbox-inline">
                <SwitchInput
                  props={props}
                  field="carCheck"
                  label="Include Car"
                  defaultValue={false}
                  onChange={(e, c) => handleCarToggle(c)}
                />
              </label>

              <div
                className="form-group ml-4"
                style={{ display: hiddenCarDetails }}
              >
                <h4>Car Rental</h4>
                {carData.map((item, index) => {
                  return (
                    <fieldset name={item.id} key={item.id}>
                      <div className="border row">
                        <div className="col-md-10 form-inline">
                          <div className="col-md-6">
                            <div className="form-inline">
                              <TextInput
                                props={props}
                                field="DepartCity"
                                name={`car${item.id}.DepartCity`}
                                label="Pickup Location"
                              />

                              <DatePicker
                                props={props}
                                field="DepartDate"
                                name={`car${item.id}.DepartDate`}
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
                                name={`car${item.id}.DepartTime`}
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
                                name={`car${item.id}.ReturnCity`}
                                label="Return Location"
                              />
                              {/* <MyDatePicker
  label="Departure Date"
  name={`car${item.id}.ReturnDate`}
  {...props}
/> */}
                              <DatePicker
                                props={props}
                                field="ReturnDate"
                                name={`car${item.id}.ReturnDate`}
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
                                name={`car${item.id}.ReturnTime`}
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
                              onClick={() => removeCar(index)}
                            >
                              Delete segment
                            </button>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  );
                })}

                <div className="float-right">
                  <br />
                  <section>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => {
                        appendCar({ name: "appendCar" });
                      }}
                    >
                      Add car segment
                    </button>
                  </section>
                </div>
              </div>
            </div>

            {/* Rail */}
            <div className="form-group">
              <label className="checkbox-inline">
                <SwitchInput
                  props={props}
                  field="railCheck"
                  label="Include Rail"
                  defaultValue={false}
                  onChange={(e, c) => handleRailToggle(c)}
                />
              </label>
              <div
                className="form-group ml-4"
                style={{ display: hiddenRailDetails }}
              >
                <h4>Rail</h4>
                {railData.map((item, index) => {
                  return (
                    <fieldset name={item.id} key={item.id}>
                      <div className="border row">
                        <div className="col-md-10 form-inline">
                          <div className="col-md-6">
                            <div className="form-inline">
                              <TextInput
                                props={props}
                                field="DepartCity"
                                name={`rail${item.id}.DepartCity`}
                                label="From City or Station"
                              />

                              <DatePicker
                                props={props}
                                field="DepartDate"
                                name={`rail${item.id}.DepartDate`}
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
                                name={`rail${item.id}.DepartTime`}
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
                                name={`rail${item.id}.ReturnCity`}
                                label="To City or Station"
                              />
                              {/* <MyDatePicker
  label="Departure Date"
  name={`rail${item.id}.ReturnDate`}
  {...props}
/> */}
                              <DatePicker
                                props={props}
                                field="ReturnDate"
                                name={`rail${item.id}.ReturnDate`}
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
                                name={`rail${item.id}.ReturnTime`}
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
                              onClick={() => removeRail(index)}
                            >
                              Delete segment
                            </button>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  );
                })}

                <div className="float-right">
                  <br />
                  <section>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => {
                        appendRail({ name: "appendRail" });
                      }}
                    >
                      Add rail segment
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <br />
            <Button
              className="btn btn-primary"
              type="submit"
              disabled={!formState.isValid}
              color="primary"
              variant="contained"
            >
              Submit Request
            </Button>
          </div>
        </div>
      </Grid>
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
