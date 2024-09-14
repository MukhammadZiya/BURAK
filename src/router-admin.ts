console.log("5-qadam")

import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

/** RESTAURANT*/

routerAdmin.get("/", restaurantController.goHome);

routerAdmin
  .get("/login", restaurantController.getLogin)
  // .post("/login", restaurantController.processLogin);

  routerAdmin.post('/login', function(req, res){
    restaurantController.Create
  });

routerAdmin
  .get("/signup", restaurantController.getSignup)
  // .post("/signup", restaurantController.processSignup);
  routerAdmin.post('/signup', function(req, res){
    restaurantController.Create
  });

  /** PRODUCT */
  /** USER */

export default routerAdmin;
