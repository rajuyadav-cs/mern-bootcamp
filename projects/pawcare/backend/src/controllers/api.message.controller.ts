import { Request, Response } from "express";

export const message = async (req: Request, res: Response) => {
  const message = req.body;
  console.log(message);
  // res.status(200).json({
  //   success: true,
  //   message: "Welcome to Alfanso!",
  // });
};
