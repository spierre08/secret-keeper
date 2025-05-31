import LogRepository from "./log.repository.js";

class LogService {
  static getAll = async () => {
    const response = await LogRepository.getAll();

    return response;
  };

  static deleteAll = async () => {
    const response = await LogRepository.deleteAll();

    return response;
  };
}

export default LogService;
