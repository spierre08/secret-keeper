import UserModel from "./models/user.model.js";

class UserRepository {
  static create = async (data) => {
    const response = await UserModel.create(data);

    return response;
  };

  static getById = async (id) => {
    const response = await UserModel.findById({ _id: id });

    return response;
  };

  static getByEmail = async (email) => {
    const response = await UserModel.findOne({ email });

    return response;
  };

  static update = async (id, data) => {
    const response = await UserModel.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });

    return response;
  };

  static delete = async (id) => {
    const response = await UserModel.findByIdAndDelete({ _id: id });

    return response;
  };
}

export default UserRepository;
