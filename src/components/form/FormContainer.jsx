import { Formik, Form } from "formik";
import PropTypes from "prop-types";

const FormContainer = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          {children}
          <button type="submit" disabled={isSubmitting}>
            Soumettre
          </button>
        </Form>
      )}
    </Formik>
  );
};

FormContainer.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormContainer;
