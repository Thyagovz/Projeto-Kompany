import { Project } from "../generated/prisma";

export type ProjectCreate = Omit<Project, "id" | "createdAt">;

export { Project };
