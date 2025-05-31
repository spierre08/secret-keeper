import LogService from "./log.service.js";

class LogController {
  static getAll = async (req, res) => {
    try {
      const response = await LogService.getAll();

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static delete = async (req, res) => {
    try {
      const response = await LogService.deleteAll();

      return res
        .status(200)
        .json({
          message:
            "Toutes les historiques de votre connectivités sont supprimées avec succès.",
        });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default LogController;
