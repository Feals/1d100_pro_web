import { useDispatch } from "react-redux";
import { signIn } from "../../store/action/authAction";
import { SigninSchema } from "./validationSchemas";
import FormContainer from "./FormContainer";
import FormField from "./FormField";

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
      <FormField label="Email" name="mail" type="email" />
      <FormField label="Mot de passe" name="password" type="password" />
    </FormContainer>
  );
};

export default SignInForm;
