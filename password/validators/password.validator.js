import yup from "yup";

const PasswordSchemaValidator = yup.object({
  body: yup.object({
    user_id: yup
      .string()
      .typeError("L'id de l'utilisateur doit être en string")
      .required("L'id de l'utilisateur est obligatoire"),

    user_name: yup
      .string()
      .typeError("Le nom utilisateur du serveur doit être en string")
      .required("Le nom utilisateur du service est obligatoire"),

    service_name: yup
      .string()
      .typeError("Le nom du service doit être en sring")
      .required("Le service est obligatoire"),

    password_ecrypt: yup
      .string()
      .typeError("Le mot de passe crypté doit être en string")
      .required("Le mot de passe crypté est obligatoire"),

    category: yup
      .string()
      .typeError("La catégorie du service doit être en string")
      .required("La catégorie du service est obligatoire"),
  }),
});

export default PasswordSchemaValidator;
