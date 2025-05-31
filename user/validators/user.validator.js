import yup from "yup";

const UserSchemaValidator = yup.object({
  body: yup.object({
    user_name: yup
      .string()
      .typeError("Le nom utilisateur doit être en string")
      .required("L'nom utilisateur est obligatoire"),

    email: yup
      .string()
      .typeError("L'email doit être en string")
      .email("L'email saisi est invalide")
      .required("L'email est obligatoire"),

    password: yup
      .string()
      .typeError("Le mot de passe doit être en string")
      .min(8, "Le mot de passe être 8 caractères au minimun")
      .matches(/[a-zA-Z]/, "Le mot de passe doit contenir au moins une lettre")
      .matches(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
      .matches(
        /[\W_]/,
        "Le mot de passe doit contenir au moins un caractère spécial"
      )
      .required("Le mot de passe est obligatoire"),
  }),
});

export default UserSchemaValidator;
