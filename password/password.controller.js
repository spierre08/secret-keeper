import PasswordService from "./password.service.js";

class PasswordController {
  static create = async (req, res) => {
    const { user_id, user_name, service_name, password_ecrypt, category } =
      req.body;

    try {
      const response = await PasswordService.create({
        user_id,
        user_name,
        service_name,
        password_ecrypt,
        category,
      });

      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static getById = async (req, res) => {
    const { id } = req.params;

    try {
      const response = await PasswordService.getById(id);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static getByUserId = async (req, res) => {
    const { user_id } = req.params;

    try {
      const response = await PasswordService.getByUserId(user_id);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static update = async (req, res) => {
    const { id } = req.params;
    const { user_name, service_name, password_ecrypt, category } = req.body;

    try {
      const response = await PasswordService.update(id, {
        user_name,
        service_name,
        password_ecrypt,
        category,
      });

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static delete = async (req, res) => {
    const { id } = req.params;

    try {
      const response = await PasswordService.delete(id);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default PasswordController;
