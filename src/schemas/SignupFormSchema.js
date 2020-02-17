import * as Yup from "yup";
import { format, parse, parseISO } from "date-fns";

const SignupFormSchema = {
  TName: Yup.string().required("* required"),
  TEmail: Yup.string()
    .required("* required")
    .email("Invalid format"),
  TPhone: Yup.string().required("* required"),
  TDSID: Yup.string().required("* required"),
  currency: Yup.string().min(1, "Currency is required"),
  toggle: Yup.boolean("Invalid value"),
  toggleEdit: Yup.boolean("Invalid value"),
  calendar: Yup.string().required("Date is required"),
  DepartCity: Yup.string().required("Departure City is required"),
  DepartTime: Yup.string().required("Departure time is required"),
  ReturnCity: Yup.string().required("Return City is required"),
  ReturnTime: Yup.string().required("Return time is required"),
  DepartDate: Yup.date().required("Date is required"),
  ReturnDate: Yup.date().required("Date is required"),
  airCheck: Yup.string()
};

async function DateValidation(value, params) {
  console.log(`inside date validation for ${value}`);
  console.log(params);
  const { minDate, maxDate } = params;
  const parsedDate = parse(value, "mm/dd/yyyy", new Date());
  console.log(`Min date is ${format(parseISO(minDate), "mm/dd/yyyy")}`);
  console.log(`Max date is ${format(parseISO(maxDate), "mm/dd/yyyy")}`);
  return await Yup.date()
    .typeError("Invalid date")
    .min(minDate, `Min date is ${format(parseISO(minDate), "mm/dd/yyyy")}`)
    .max(maxDate, `Max date is ${format(parseISO(maxDate), "mm/dd/yyyy")}`)
    .validate(parsedDate)
    .then(value => {})
    .catch(err => {
      return err.message;
    });
}

async function MonthCalendarValidation(value, params) {
  const { format } = params;
  const parsedDate = parse(value, format, new Date());
  return await Yup.date()
    .typeError("Invalid date")
    .validate(parsedDate)
    .then(value => {})
    .catch(err => {
      return err.message;
    });
}

export default {
  yupValidations: SignupFormSchema,
  customValidations: {
    // name: NameValidation,
    //ReturnDate: DateValidation,
    //DepartDate: DateValidation,
    monthCalendar: MonthCalendarValidation
  }
};
