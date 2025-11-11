// Como é um módulo que nós criamos é necessário incluir a extensão .js, no caso
// Se fosse um módulo do node.js/npm não precisaria incluir a extensão .js
import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
    )
    `);

function createUserRepository(newUser) {
  return new Promise((res, rej) => {
    // Nesta linha a seguir o professor fez uma desestruturação para poder usar elas diretamente dentro
    // do colchetes linhas abaixo desta
    // Estas interrogações abaixo é para evitar injeção de dependências, ou seja, ataques maliciosos
    const { username, email, password, avatar } = newUser;
    db.run(
      `
      INSERT INTO users (username, email, password, avatar)    
      VALUES (?,?,?,?) 

      `,
      [username, email, password, avatar],
      (err) => {
        if (err) {
          rej(err);
        } else {
          res({ message: "User created" });
        }
      }
    );
  });
}

export default {
  createUserRepository,
};
