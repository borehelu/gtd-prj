import { useFormik } from "formik";
import { passwordResetSchema } from "../../schema";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import FormControl from "../../components/FormControl";
import { Form, Wrapper, Button, LeftPanel, RightPanel } from "./styles";
import illustration from "../../assets/img/resetpwd.svg";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

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
          await axios.post("auth/reset-password", JSON.stringify(values), {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          toast.success("Password reset.", { id: toastId });
          navigate("/login");
        } catch (error) {
          toast.error("Error updating password", { id: toastId });
        }
      },
    });
  return (
    <Wrapper>
      <main>
        <Toaster />
        <LeftPanel>
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
        </LeftPanel>
        <RightPanel>
          <img src={illustration} alt="addf" />
          <h2>Getting Things Done</h2>
          <p>Organize your life for maximum engagement.</p>
        </RightPanel>
      </main>
    </Wrapper>
  );
}

export default ResetPassword;
