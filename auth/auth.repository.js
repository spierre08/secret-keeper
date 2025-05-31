import UserModel from "../user/models/user.model.js";

class AuthRepository {
  static getByUserName = async (user_name) => {
    const response = await UserModel.findOne({ user_name });

    return response;
  };

  static getByEmail = async (email) => {
    const response = await UserModel.findOne({ email });

    return response;
  };

  static updatePassword = async (email, data) => {
    const response = await UserModel.findOneAndUpdate({ email: email }, data, {
      new: true,
    });

    return response;
  };
}

export default AuthRepository;
