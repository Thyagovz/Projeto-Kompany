import { Request, Response } from "express";
import { ProjectService } from "../services";

export class ProjectController {
  public create = async (req: Request, res: Response) => {
    const projectService = new ProjectService();
    const project = await projectService.create(req.body);

    return res.status(201).json(project);
  };

  public findAll = async (req: Request, res: Response) => {
    const projectService = new ProjectService();
    const project = await projectService.findAll();

    return res.json(project);
  };

  public findOne = async (req: Request, res: Response) => {
    const projectService = new ProjectService();
    const foundProject = await projectService.findOne(Number(req.params.id));

    if (!foundProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    return res.json(foundProject);
  };
}
