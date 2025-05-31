import UserRepository from "./user.repository.js";
import AppConfig from "../common/config/app.config.js";

class UserService {
  static create = async (data) => {
    const isEmailExist = await UserRepository.getByEmail(data.email);
    if (isEmailExist) {
      throw new Error(
        "Cette adresse est déjà utilisée par un autre utilisateur"
      );
    }

    const response = await UserRepository.create(data);

    return response;
  };

  static getById = async (id) => {
    if (!AppConfig.objectId.isValid(id)) {
      throw new Error("L'id est invalide");
    }

    const response = await UserRepository.getById(id);

    return response;
  };

  static update = async (id, data) => {
    if (!AppConfig.objectId.isValid(id)) {
      throw new Error("L'id est invalide");
    }

    const response = await UserRepository.update(id, data);

    return response;
  };

  static delete = async (id) => {
    if (!AppConfig.objectId.isValid(id)) {
      throw new Error("L'id est invalide");
    }

    const response = await UserRepository.getById(id);
    if (!response) {
      throw new Error("Ce compte n'existe pas ou a déjà été supprimé");
    }

    await UserRepository.delete(id);
    return {
      message: "Compte utilisateur supprimé avec succès.",
    };
  };
}

export default UserService;
