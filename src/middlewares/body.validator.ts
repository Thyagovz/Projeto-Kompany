import { NextFunction, Request, Response } from "express";
import { ZodError, ZodType } from "zod";

export function validateBody(schema: ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.issues });
      }
    }
    return next();
  };
}

// export class Validator {
//   static execute(schema: ZodType) {
//     return (req: Request, res: Response, next: NextFunction) => {
//       try {
//         req.body = schema.parse(req.body);
//       } catch (error) {
//         if (error instanceof ZodError) {
//           return res.status(400).json({ error: error.issues });
//         }
//       }
//     };
//   }
// }
