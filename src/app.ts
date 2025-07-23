import { ManagerController, ProjectController } from "./controllers";
import express from "express";
import { validateBody } from "./middlewares";
import { managerCreateSchema } from "./schemas";
import { projectCreateSchema } from "./schemas/project.schemas";

const app = express();
app.use(express.json());

const managerController = new ManagerController();
const projectController = new ProjectController();

app.get("/managers", managerController.findAll);
app.post(
  "/managers",
  validateBody(managerCreateSchema),
  managerController.create
);
app.get("/managers/:id", managerController.findOne);

app.get("/projects", projectController.findAll);
app.post(
  "/projects",
  validateBody(projectCreateSchema),
  projectController.create
);
app.get("/projects/:projectId", projectController.findOne);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
