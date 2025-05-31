import yup from "yup";

const LoginSchemaValidator = yup.object({
  body: yup.object({
    email: yup
      .string()
      .typeError("L'email doit être en string")
      .email("L'email saisi est invalide")
      .required("L'email est obligatoire"),

    password: yup
      .string()
      .typeError("Le mot de passe doit être en string")
      .required("Le mot de passe est obligatoire"),
  }),
});

export default LoginSchemaValidator;
