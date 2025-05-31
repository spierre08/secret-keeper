import PasswordRepsitory from "./password.repository.js";
import AppConfig from "../common/config/app.config.js";

class PasswordService {
  static create = async (data) => {
    const response = await PasswordRepsitory.create(data);

    return response;
  };

  static getById = async (id) => {
    if (!AppConfig.objectId.isValid(id)) {
      throw new Error("L'id est invalide");
    }

    const response = await PasswordRepsitory.getById(id);

    return response;
  };

  static getByUserId = async (user_id) => {
    const response = await PasswordRepsitory.getByUserId(user_id);

    return response;
  };

  static update = async (id, data) => {
    if (!AppConfig.objectId.isValid(id)) {
      throw new Error("L'id est invalide");
    }

    const response = await PasswordRepsitory.update(id, data);

    return response;
  };

  static delete = async (id) => {
    if (!AppConfig.objectId.isValid(id)) {
      throw new Error("L'id est invalide");
    }

    const response = await PasswordRepsitory.getById(id);
    if (!response) {
      throw new Error("Ce mot de passe existe pas ou a déjà été supprimé !");
    }

    await PasswordRepsitory.delete(id);

    return {
      message: "Mot de passe supprimé avec succès.",
    };
  };
}

export default PasswordService;
