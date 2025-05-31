import AuthRepository from "./auth.repository.js";
import LogRepository from "../login-history/log.repository.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

class AuthService {
  static getByUserName = async (user_name) => {
    const response = await AuthRepository.getByUserName(user_name);

    return response;
  };

  static getByEmail = async (email) => {
    const response = await AuthRepository.getByEmail(email);

    return response;
  };

  static login = async (email, password) => {
    const response = await AuthRepository.getByEmail(email);

    if (!response) {
      throw new Error("L'email est incorrecte");
    }

    const matchedPassword = await argon2.verify(response.password, password);
    if (!matchedPassword) {
      throw new Error("Mot de passe incorrecte");
    }

    const token = jwt.sign(
      {
        id: response._id,
      },
      process.env.SECRET_KEY || "",
      {
        expiresIn: process.env.JWT_EXPIRATION,
      }
    );

    const users = { info_user: response, token: token };
    const log_history = await LogRepository.create({
      user_id: response._id,
      login_date: new Date(),
    });

    return { users, log_history };
  };

  static updatePassword = async (email, password) => {
    const options = {
      time: 4,
      memory: 65536,
      parallelism: 2,
    };
    const passwordHashed = await argon2.hash(password, options);
    const response = await AuthRepository.getByEmail(email);

    if (!response) {
      throw new Error("L'email est incorrecte");
    }

    return await AuthRepository.updatePassword(email, {
      password: passwordHashed,
    });
  };
}

export default AuthService;
