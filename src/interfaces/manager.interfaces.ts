import { Manager } from "../generated/prisma";

export type ManagerCreate = Omit<Manager, "id" | "createdAt">;

export { Manager };
