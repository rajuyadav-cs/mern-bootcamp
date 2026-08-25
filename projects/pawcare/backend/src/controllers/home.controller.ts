import { Request, Response } from "express";

export const homePage = async (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Successfully created a server!",
  });
};
