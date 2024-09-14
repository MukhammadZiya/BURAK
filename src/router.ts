console.log("3-qadam")

import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
console.log("3-qadam passed 111")

// router.post("/login", memberController.login);
// console.log("3-qadam passed ")
// router.post("/signup", memberController.signup);
// console.log("3-qadam passed ")



router.post('/login', function(req, res){
  memberController.Create
});

("3-qadam passed ")

router.post('/signup', function(req, res){
  memberController.Create
});

("3-qadam passed ")

export default router;

console.log("3-qadam passed 111")