console.log("2-qadam")

import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

// kirish
const app = express();
console.log("_dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

//view

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//router
app.use("/admin", routerAdmin);
app.use("/", router); //Middleware design pattern

export default app;
