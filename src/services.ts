import { prisma } from "../prisma/prisma.client";

import { ManagerCreate } from "./interface";

export default class ManagerService {
  public create = async (payload: ManagerCreate) => {
    return await prisma.manager.create({ data: payload });
  };

  public findAll = async () => {
    return await prisma.manager.findMany();
  };
}
//   public findOne = (managerId: number) => {
//     return this.managerDatabase.find((manager) => manager.id === managerId);
//   };
// }
