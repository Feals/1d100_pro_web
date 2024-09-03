import { Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormContainer from "./FormContainer";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/action/authAction";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Trop court!")
    .max(50, "Trop long!")
    .required("Requis"),
  lastname: Yup.string()
    .min(2, "Trop court!")
    .max(50, "Trop long!")
    .required("Requis"),
  mail: Yup.string().email("Email invalide").required("Requis"),
  password: Yup.string().min(6, "Mot de passe trop court").required("Requis"),
});

const SignUpForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    firstname: "",
    lastname: "",
    mail: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(signUp(values));
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
        <label htmlFor="firstname">Prénom</label>
        <Field name="firstname" type="text" />
        <ErrorMessage name="firstname" component="div" className="error" />
      </div>

      <div>
        <label htmlFor="lastname">Nom</label>
        <Field name="lastname" type="text" />
        <ErrorMessage name="lastname" component="div" className="error" />
      </div>

      <div>
        <label htmlFor="mail">Email</label>
        <Field name="mail" type="email" />
        <ErrorMessage name="mail" component="div" className="error" />
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
