import { Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormContainer from "./FormContainer";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Trop court!")
    .max(50, "Trop long!")
    .required("Requis"),
  email: Yup.string().email("Email invalide").required("Requis"),
  password: Yup.string().min(6, "Mot de passe trop court").required("Requis"),
});

const SignUpForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log("Formulaire soumis avec succès", values);
  };

  return (
    <FormContainer
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <h2>Inscription</h2>
      <div>
        <label htmlFor="name">Nom</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" component="div" className="error" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" className="error" />
      </div>

      <div>
        <label htmlFor="password">Mot de passe</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" component="div" className="error" />
      </div>
    </FormContainer>
  );
};

export default SignUpForm;
