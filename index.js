import express from "express";
import userRouters from "./src/routes/user.routes.js";
const app = express();

app.use(express.json());
app.use(userRouters)

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

//Todo este código abaixo esta assim antes do professor mudar tudo. Estou mantendo ele como histórico da aula

/*import express from "express";
const app = express();
app.use(express.json());

// Escopo global para user, senão vai perder os dados dentro do método POST
const users = [];

// Methodo GET para testar se o servidor foi criado e está rodando
// app.get("/hello", (req, res) => {
//   res.send("Hello World, my Friendy!");
// });

// Methodo POST para criar os usuários de acordo com a requisição/solicitação do Front-End
/*app.post("/users", (req, res) => {
  //   console.log(req);
  const body = req.body;
  users.push(body);
  // Pode retornar o json, caso queira retornar o usuário como um json, embora não seja o usual
  // res.status(201).json(users);
  res.status(201).send("Usuário criado com sucesso!");
});*/

// app.post("/users", createUserController(req, res));

// Método GET para retornar os usuários criados para o Front-End
// app.get("/users", (req, res) => {
// res.send({ message: "Esses são os usuários:", users });
// res.send({ users });
// });

// app.listen(3000, () => {
// console.log("Server is running on port 3000");
// });
// import express from "express";
// const app = express();
// const port = 3000;
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// }); /*
