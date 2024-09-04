import express from "express";
import path from "path";

// kirish
const app = express();
console.log("_dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}))
app.use(express.json());

export default app;


//view

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");


