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
  options,
}) {
  switch (type) {
    case "text":
    case "password":
    case "email":
    case "date":
    case "time":
      return (
        <>
          <InputWrapper>
            <label htmlFor={id}>{label}</label>
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
          </InputWrapper>
          {errors[id] && touched[id] && (
            <small>
              <RiErrorWarningLine /> {errors[id]}
            </small>
          )}
        </>
      );

    case "textarea":
      return (
        <>
          <InputWrapper>
            <label htmlFor={id}>{label}</label>
            <textarea
              name={id}
              id={id}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values[id]}
              required
              className={errors[id] && touched[id] ? "error" : ""}
            />
          </InputWrapper>
          {errors[id] && touched[id] && (
            <small>
              <RiErrorWarningLine /> {errors[id]}
            </small>
          )}
        </>
      );

    case "select":
      return (
        <>
          <InputWrapper>
            <label htmlFor={id}>{label}</label>
            <select
              name={id}
              id={id}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values[id]}
              required
              className={errors[id] && touched[id] ? "error" : ""}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </InputWrapper>
          {errors[id] && touched[id] && (
            <small>
              <RiErrorWarningLine /> {errors[id]}
            </small>
          )}
        </>
      );

    default:
      return null;
  }
}

export default FormControl;
