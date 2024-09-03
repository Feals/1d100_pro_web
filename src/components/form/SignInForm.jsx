import { Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormContainer from "./FormContainer";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/action/authAction";

const SigninSchema = Yup.object().shape({
  mail: Yup.string().email("Email invalide").required("Requis"),
  password: Yup.string().min(6, "Mot de passe trop court").required("Requis"),
});

const SignInForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    mail: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(signIn(values));
  };

  return (
    <FormContainer
      initialValues={initialValues}
      validationSchema={SigninSchema}
      onSubmit={handleSubmit}
    >
      <h2>Connexion</h2>
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

export default SignInForm;
