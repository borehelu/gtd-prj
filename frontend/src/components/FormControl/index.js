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
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values[id]}
        className={errors[id] && touched[id] ? "error" : ""}
      />
      {errors[id] && touched[id] && (
        <small>
          <RiErrorWarningLine /> {errors[id]}
        </small>
      )}
    </InputWrapper>
  );
}

export default FormControl;
