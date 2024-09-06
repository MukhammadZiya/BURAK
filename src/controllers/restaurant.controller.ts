import { Request, Response } from "express";
import { T } from "../libs/types/common";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

restaurantController.goLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("Error, goLogin", err);
  }
};

restaurantController.goSignup = (req: Request, res: Response) => {
  try {
    res.send("Sign Up Page");
  } catch (err) {
    console.log("Error, goSignup", err);
  }
};

export default restaurantController;
