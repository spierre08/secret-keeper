import UserService from "./user.service.js";
import argon2 from "argon2";

class UserController {
  static create = async (req, res) => {
    const { user_name, email, password } = req.body;

    try {
      const options = {
        time: 4,
        memory: 65536,
        parallelism: 2,
      };
      const passwordHashed = await argon2.hash(password, options);

      const response = await UserService.create({
        user_name,
        email,
        password: passwordHashed,
      });

      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static getById = async (req, res) => {
    const { id } = req.params;

    try {
      const response = await UserService.getById(id);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static update = async (req, res) => {
    const { id } = req.params;
    const { user_name, email } = req.body;

    try {
      const response = await UserService.update(id, { user_name, email });

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  static delete = async (req, res) => {
    const { id } = req.params;

    try {
      const response = await UserService.delete(id);

      res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

export default UserController;
