import * as yup from "yup";

export const YupSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name."),
  lastName: yup.string().required("Please enter your last name."),
  email: yup.string().email("Enter a valid email").required(),
  password: yup
    .password()
    .min(4, "Password must contain at least 4 characters.")
    .required(),
  title: yup.string().required("Please enter a title."),
  description: yup
    .string()
    .required("Please enter a description for your event."),
  address: yup.string().required("Please enter your address."),
  date: yup.date().required("Please enter a date for your event."),
  time: yup.string().required("Please enter a time for your event."),
  image: yup.string().url().required("Please enter your image."),
  moreInfo: yup.string().url(),
});
