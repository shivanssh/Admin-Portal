import * as Yup from "yup";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  add1: string;
  add2: string;
}

export const initialValue: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  add1: "",
  add2: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid Phone Data")
    .required("Required"),
  add1: Yup.string().required(),
  add2: Yup.string().required(),
});
