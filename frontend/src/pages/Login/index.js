import { useFormik } from "formik";
import { loginSchema } from "../../schema";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import FormControl from "../../components/FormControl";
import { Form, Wrapper, Button, LeftPanel, RightPanel } from "./styles";
import illustration from "../../assets/img/login.svg";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: async () => {
        const toastId = toast.loading("Loading...");
        try {
          const response = await axios.post(
            "auth/login",
            JSON.stringify(values),
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          const accessToken = response?.data?.accessToken;
          setAuth({ accessToken });
          toast.success("Logged in", { id: toastId });
          navigate(from, { replace: true });
        } catch (error) {
          if (!error?.response) {
            toast.error("No server response", { id: toastId });
          } else if (error.response?.status === 400) {
            toast.error("Invalid email or password", { id: toastId });
          } else if (error.response?.status === 401) {
            toast.error("Invalid email or password", { id: toastId });
          } else {
            toast.error("Login failed", { id: toastId });
          }
        }
      },
    });
  return (
    <Wrapper>
      <main>
        <Toaster />
        <LeftPanel>
          <Form onSubmit={handleSubmit} autocomplete="off">
            <h2>Welcome back</h2>
            <p>Provide your email and password to login.</p>
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
            <Link className="forgot_password_link" to="/forgot-password">
              Forgot password?
            </Link>
            <Button type="submit">Login</Button>
          </Form>
          <p>
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </p>
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

export default Login;
