import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Login Page");
  } catch (err) {
    console.log("Error, goLogin", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("Sign up");
    res.send("Sign Up Page");
  } catch (err) {
    console.log("Error, goSignup", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("Done");
  } catch (err) {
    console.log("Error, goSignup", err);
  }
};

restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("Done");
  } catch (err) {
    console.log("Error, processSignup", err);
  }
};

export default restaurantController;
