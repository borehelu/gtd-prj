import { InputWrapper } from "./styles";
import { RiErrorWarningLine } from "react-icons/ri";

function FormControl({
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  type,
  id,
  label,
}) {
  return (
    <>
      <InputWrapper>
        <input
          type={type}
          name={id}
          id={id}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values[id]}
          required
          className={errors[id] && touched[id] ? "error" : ""}
        />
        <label htmlFor={id}>{label}</label>
      </InputWrapper>
      {errors[id] && touched[id] && (
        <small>
          <RiErrorWarningLine /> {errors[id]}
        </small>
      )}
    </>
  );
}

export default FormControl;
