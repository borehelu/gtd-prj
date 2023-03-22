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

export const newIdeaSchema = yup.object().shape({
  title: yup.string().required("Required"),
  description: yup.string().required("Required"),
  tags: yup.array().min(1, "Select at least one tag"),
});

export const newCommentSchema = yup.object().shape({
  comment: yup.string().required("Required"),
});
