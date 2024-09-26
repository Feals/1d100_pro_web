import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/action/authAction";
import { SigninSchema } from "./validationSchemas";
import FormContainer from "./formContainer";
import FormField from "./formField";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  console.log("token", token);

  const initialValues = {
    mail: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(signIn(values, navigate));
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
