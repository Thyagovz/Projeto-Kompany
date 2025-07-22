import { Request, Response } from "express";
import { ManagerService } from "../services";

export class ManagerController {
  public create = async (req: Request, res: Response) => {
    const managerService = new ManagerService();
    const manager = await managerService.create(req.body);

    return res.status(201).json(manager);
  };

  public findAll = async (req: Request, res: Response) => {
    const managerService = new ManagerService();
    const manager = await managerService.findAll();

    return res.json(manager);
  };

  public findOne = async (req: Request, res: Response) => {
    const managerService = new ManagerService();
    const foundManager = await managerService.findOne(Number(req.params.id));

    if (!foundManager) {
      return res.status(404).json({ error: "Manager not found" });
    }
    return res.json(foundManager);
  };
}
