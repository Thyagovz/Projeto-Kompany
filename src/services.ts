import { Manager, ManagerCreate } from "./interface";

export class ManagerService {
  private managerDatabase: Manager[] = [];

  private generateNextId = () => {
    const lastManager = this.managerDatabase.sort((a, b) => a.id - b.id).at(-1);
    return lastManager ? lastManager.id + 1 : 1;
  };

  public create = (payload: ManagerCreate) => {
    const newManager = {
      ...payload,
      id: this.generateNextId(),
    };
    this.managerDatabase.push(newManager);
    return newManager;
  };

  public findAll = () => {
    return this.managerDatabase;
  };
}
