import { ManagerController, ProjectController } from "./controllers";
import express from "express";

const app = express();
app.use(express.json());

const managerController = new ManagerController();
const projectController = new ProjectController();

app.get("/managers", managerController.findAll);
app.post("/managers", managerController.create);
app.get("/managers/:id", managerController.findOne);

app.get("/projects", projectController.findAll);
app.post("/projects", projectController.create);
app.get("/projects/:projectId", projectController.findOne);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
