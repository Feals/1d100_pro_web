import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
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

export const SigninSchema = Yup.object().shape({
  mail: Yup.string().email("Email invalide").required("Requis"),
  password: Yup.string().min(6, "Mot de passe trop court").required("Requis"),
});

export const addJdrSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Le nom est trop court!")
    .max(100, "Le nom est trop long!")
    .required("Le nom est requis"),
  description: Yup.string()
    .min(10, "La description est trop courte!")
    .max(1000, "La description est trop longue!")
    .required("La description est requise"),
  genreIds: Yup.array()
    .min(1, "Sélectionnez au moins un genre")
    .required("Requis"),
  selectedFile: Yup.mixed().required("Une image est requise"),
});
