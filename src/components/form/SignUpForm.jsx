import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../store/action/authAction";
import { SignupSchema } from "./validationSchemas";
import FormContainer from "./formContainer";
import FormField from "./formField";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    firstname: "",
    lastname: "",
    mail: "",
    password: "",
  };

  const { error: errorAuth } = useSelector((state) => state.auth);

  const handleSubmit = async (values, { setFieldError }) => {
    await dispatch(signUp(values, navigate));

    if (errorAuth) {
      setFieldError("mail", errorAuth);
    }
  };

  console.log("errorAuth", errorAuth);

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
