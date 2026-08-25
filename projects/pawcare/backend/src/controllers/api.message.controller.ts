import { Request, Response } from "express";

export const message = async (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Alfanso!",
  });
};
