import express from "express";
import userRouters from "./src/routes/user.routes.js";
import bookRouters from "./src/routes/book.routes.js";
import loanRoutes from "./src/routes/loan.routes.js";
import "dotenv/config";
import "./src/service/cron.service.js"
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouters);
app.use(bookRouters);
app.use(loanRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
