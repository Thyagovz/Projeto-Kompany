import { ManagerService } from "./services";
import express from "express";

const app = express();
app.use(express.json);

app.get("/", (req, res) => {
  return res.json({ message: "ola mundo" });
});

app.get("/managers", (req, res) => {
  const managerService = new ManagerService();
  return res.json(managerService.findAll());
});

app.post("/managers", (req, res) => {
  const managerService = new ManagerService();
  return res.json({ message: "POST /managers" });
});

app.listen(3000, () => console.log("Servidor rodando na porta 300"));

const payload1 = {
  id: 1,
  name: "Chrystian",
  email: "chrystian@kenzie.com.br",
};

const payload2 = {
  id: 2,
  name: "Pedro",
  email: "pedro@kenzie.com.br",
};

const managerService = new ManagerService();

const manager1 = managerService.create(payload1);
const manager2 = managerService.create(payload2);
