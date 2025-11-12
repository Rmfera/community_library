import userRepository from "../repositories/user.repositories.js";
import bcrypt from "bcrypt";

async function createUserService(newUser) {
  const foundUser = await userRepository.findUserByEmailRepository(
    newUser.email
  );
  if (foundUser) throw new Error("User already exists!");

  // O professor mencionou que este 10 é o número de saltos, ou seja, maior este número mais seguro
  // porém quanto maior este número vai ficar mais lento para criar o HASH com ele
  const passHash = await bcrypt.hash(newUser.password, 10);

  // Este ...newUser, password: passHash é uma forma de passar o objeto e mudar apenas o password dentro deste objeto
  const user = await userRepository.createUserRepository({
    ...newUser,
    password: passHash,
  });
  if(!user) throw new Error("Error creating User!")
  return user;
}

export default {
  createUserService,
};
