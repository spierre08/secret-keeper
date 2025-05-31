import LogModel from "./models/log.model.js";

class LogRepository {
  static create = async (data) => {
    const response = await LogModel.create(data);

    return response;
  };

  static getAll = async () => {
    const response = await LogModel.find()
      .populate("user_id")
      .sort({ createdAt: -1 });

    return response;
  };

  static deleteAll = async () => {
    const response = await LogModel.deleteMany();

    return response;
  };
}

export default LogRepository;
