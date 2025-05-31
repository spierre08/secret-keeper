import PasswordModel from "./models/password.model.js";

class PasswordRepsitory {
  static create = async (data) => {
    const response = await PasswordModel.create(data);

    return response;
  };

  static getById = async (id) => {
    const response = await PasswordModel.findById({ _id: id }).populate(
      "user_id"
    );

    return response;
  };

  static getByUserId = async (user_id) => {
    const response = await PasswordModel.find({ user_id })
      .populate("user_id")
      .sort({ createdAt: -1 });

    return response;
  };

  static update = async (id, data) => {
    const response = await PasswordModel.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });

    return response;
  };

  static delete = async (id) => {
    const response = await PasswordModel.findByIdAndDelete({ _id: id });

    return response;
  };
}

export default PasswordRepsitory;
