import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// .matches(passwordRules, { message: "please create a stronger password" })

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(8, "Must be at least 8 characters long")
    .required("Required"),
});

export const signupSchema = yup.object().shape({
  first_name: yup.string().required("Required"),
  last_name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(8, "Must be at least 8 characters long")
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
});

export const passwordResetSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Must be at least 8 characters long")
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const inboxSchema = yup.object().shape({
  item: yup.string().required("Required"),
});

export const nextActionSchema = yup.object().shape({
  item_name: yup.string().required("Required"),
  description: yup.string().required("Required"),
  context_id: yup.string().required("Required"),
  due_date: yup.date().required("Required"),
});

export const projectSchema = yup.object().shape({
  project_name: yup.string().required("Required"),
  description: yup.string().required("Required"),
  outcome: yup.string().required("Required"),
  due_date: yup.date().required("Required"),
});

export const somedaySchema = yup.object().shape({
  item_name: yup.string().required("Required"),
  description: yup.string().required("Required"),
});

export const waitingforSchema = yup.object().shape({
  item_name: yup.string().required("Required"),
  description: yup.string().required("Required"),
  contact_name: yup.string().required("Required"),
  contact_email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  due_date: yup.date().required("Required"),
});

export const referenceSchema = yup.object().shape({
  name: yup.string().required("Required"),
  description: yup.string().required("Required"),
  path: yup.string().required("Required"),
});

export const calendarSchema = yup.object().shape({
  event_name: yup.string().required("Required"),
  event_description: yup.string().required("Required"),
  event_location: yup.string().required("Required"),
  event_date: yup.date().required("Required"),
  event_start: yup
    .string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:MM)")
    .required("Time is required"),
  event_end: yup
    .string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:MM)")
    .required("Time is required"),
});

export const newIdeaSchema = yup.object().shape({
  title: yup.string().required("Required"),
  description: yup.string().required("Required"),
  tags: yup.array().min(1, "Select at least one tag"),
});

export const newCommentSchema = yup.object().shape({
  comment: yup.string().required("Required"),
});
