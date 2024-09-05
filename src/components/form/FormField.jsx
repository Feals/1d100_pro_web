import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const FormField = ({ label, name, type }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field name={name} type={type} />
    <ErrorMessage name={name} component="div" className="error" />
  </div>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormField.defaultProps = {
  type: "text",
};

export default FormField;
