import { useFormik } from "formik";
import { forgotPasswordSchema } from "../../schema";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import FormControl from "../../components/FormControl";
import { Form, Wrapper, Button } from "./styles";
import toast, { Toaster } from "react-hot-toast";

function ForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: forgotPasswordSchema,
      onSubmit: async () => {
        const toastId = toast.loading("Sending link...");
        try {
          await axios.post("auth/send-password-link", JSON.stringify(values), {
            headers: { "Content-Type": "application/json" },
          });

          toast.success("Link sent", { id: toastId });
        } catch (error) {
          toast.error("Error sending link.", { id: toastId });
        }
      },
    });
  return (
    <Wrapper>
      <Toaster />
      <Form onSubmit={handleSubmit}>
        <h2>Forgot password?</h2>
        <p>No worries. We will send you a reset link.</p>
        <FormControl
          type="email"
          id="email"
          label="Email"
          handleBlur={handleBlur}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          values={values}
        />

        <Button type="submit">Get link</Button>
      </Form>
    </Wrapper>
  );
}

export default ForgotPassword;
