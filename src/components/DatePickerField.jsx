import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const DatePickerField = ({ label, name, minDate, filterDate }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <div>
              <DatePicker
                selected={value ? new Date(value) : null}
                onChange={(date) => setFieldValue(name, date)}
                minDate={minDate}
                filterDate={filterDate}
                dateFormat="dd/MM/yyyy"
                placeholderText="Sélectionnez une date"
              />
              <ErrorMessage name={name} component="div" className="error" />
            </div>
          );
        }}
      </Field>
    </div>
  );
};

DatePickerField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  minDate: PropTypes.instanceOf(Date),
  filterDate: PropTypes.func,
};

export default DatePickerField;
