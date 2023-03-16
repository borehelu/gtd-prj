import { useFormik } from "formik";
import { signupSchema } from "../../schema";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import FormControl from "../../components/FormControl";
import { Form, Wrapper, Button, LeftPanel, RightPanel } from "./styles";
import toast, { Toaster } from "react-hot-toast";
import illustration from "../../assets/img/signup.svg";

function SignUp() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      },
      validationSchema: signupSchema,
      onSubmit: async () => {
        const toastId = toast.loading("Loading...");
        try {
          const response = await axios.post(
            "auth/sign-up",
            JSON.stringify(values),
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          const accessToken = response?.data?.accessToken;
          setAuth({ accessToken });
          toast.success("Account created in", { id: toastId });
          navigate(from, { replace: true });
        } catch (error) {
          if (!error?.response) {
            toast.error("No server response", { id: toastId });
          } else if (error.response?.status === 400) {
            toast.error("Check your inputs", { id: toastId });
          } else {
            toast.error("Account creation failed", { id: toastId });
          }
        }
      },
    });
  return (
    <Wrapper>
      <main>
        <Toaster />
        <LeftPanel>
          <Form onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <p>Let's get your started in the journey towards productivity.</p>
            <FormControl
              type="text"
              id="first_name"
              label="First Name"
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched}
              errors={errors}
              values={values}
            />

            <FormControl
              type="text"
              id="last_name"
              label="Last Name"
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched}
              errors={errors}
              values={values}
            />

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

            <Button type="submit">Sign up</Button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
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

export default SignUp;
