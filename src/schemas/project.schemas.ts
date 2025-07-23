import { z } from "zod";

export const projectSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(255),
  description: z.string(),
  createdAt: z.date(),
  managerId: z.number().int().positive(),
});

export const projectCreateSchema = projectSchema.omit({
  id: true,
  createdAt: true,
});
