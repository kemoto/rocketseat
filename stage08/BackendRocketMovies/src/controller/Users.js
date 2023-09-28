const AppError = require("../utils/AppError.js");
const { hash, compare } = require("bcrypt");
const knex = require("../database/knex/index.js");

class Users {
  async create(req, res) {
    const { name, email, password } = req.body;

    // o knex devolve um array e um array vazio não é um valor falsy
    const checkIfUserExists = await knex("users")
      .select()
      .where("email", email);

    if (checkIfUserExists.length > 0) {
      throw new AppError("O email já está em uso.");
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Usuário cadastrado com sucesso!",
    });
  }

  async update(req, res) {
    const { name, email, newPassword, oldPassword } = req.body;
    const { id } = req.params;

    const user = await knex("users").select().where("id", id).first();

    const emailAlreadyInUse = await knex("users")
      .select("email")
      .where("email", email);

    if (emailAlreadyInUse.length > 0) {
      throw new AppError("O email já está em uso!");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (!oldPassword) {
      throw new AppError("É preciso digitar a senha antiga.");
    }
    console.log(user);
    if (newPassword && oldPassword) {
      const checkPassword = await compare(oldPassword, user.password);

      if (!checkPassword) {
        throw new AppError("As senhas não conferem.");
      }
      user.password = await hash(newPassword, 8);
    }

    await knex("users").where("id", id).update({
      name: user.name,
      email: user.email,
      password: user.password,
      updated_at: knex.fn.now(),
    });

    return res.status(200).json("Cadastro atualizado com sucesso!");
  }

  async show(req, res) {
    const { id } = req.params;

    const user = await knex("users").where("id", id).select().first();

    return res.status(200).json(user);
  }

  async index(req, res) {
    const users = await knex("users").select();

    return res.status(200).json(users);
  }

  async delete(req, res) {
    const { id } = req.params;

    const checkIfUserExists = await knex("users").select().where("id", id);

    if (checkIfUserExists.length == 0) {
      throw new AppError("Usuário não encontrado.");
    }

    await knex("users").del().where("id", id);

    return res.status(200).json("Usuário deletado com sucesso!");
  }
}

module.exports = Users;
