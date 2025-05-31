import AuthService from "./auth.service.js";

class AuthController {
  static getByEmail = async (req, res) => {
    const { email } = req.params;

    try {
      const response = await AuthService.getByEmail(email);

      if (!response) {
        return res.status(404).json({ message: "Adresse mail introuvable" });
      }

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static getByUserName = async (req, res) => {
    const { user_name } = req.params;

    try {
      const response = await AuthService.getByUserName(user_name);

      if (!response) {
        return res.status(404).json({ message: "Utilisateur introuvable" });
      }

      return res.status(404).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const response = await AuthService.login(email, password);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static update = async (req, res) => {
    const { email } = req.params;
    const { password } = req.body;

    try {
      const response = await AuthService.updatePassword(email, password);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default AuthController;
