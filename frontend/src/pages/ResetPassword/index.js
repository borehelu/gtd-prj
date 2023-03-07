import { useFormik } from "formik";
import { passwordResetSchema } from "../../schema";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import FormControl from "../../components/FormControl";
import { Form, Wrapper, Button } from "./styles";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
    useFormik({
      initialValues: {
        confirm_password: "",
        password: "",
      },
      validationSchema: passwordResetSchema,
      onSubmit: async () => {
        const toastId = toast.loading("Loading...");
        try {
          await axios.post(
            "auth/reset-password",
            JSON.stringify(values),
            {
              headers: { "Content-Type": "application/json", "Authorization":`Bearer ${token}` },
            }
          );
          
          toast.success("Password reset.",{id:toastId});
          navigate('/login');
        } catch (error) {
          toast.error("Error updating password",{id:toastId});
        }
      },
    });
  return (
    <Wrapper>
      <Toaster />
      <Form onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <p>Set your new password.</p>

        <FormControl
          type="password"
          id="password"
          label="Password"
          handleBlur={handleBlur}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          values={values}
        />

        <FormControl
          type="password"
          id="confirm_password"
          label="Confirm Password"
          handleBlur={handleBlur}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          values={values}
        />
        
        <Button type="submit">Reset password</Button>
        
      </Form>
    </Wrapper>
  );
}

export default ResetPassword;
