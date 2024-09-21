import { useDispatch } from "react-redux";
import { signUp } from "../../store/action/authAction";
import { SignupSchema } from "./validationSchemas";
import FormContainer from "./formContainer";
import FormField from "./formField";

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
  };

  return (
    <FormContainer
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <h2>Inscription</h2>
      <FormField label="Prénom" name="firstname" />
      <FormField label="Nom" name="lastname" />
      <FormField label="Email" name="mail" type="email" />
      <FormField label="Mot de passe" name="password" type="password" />
    </FormContainer>
  );
};

export default SignUpForm;
