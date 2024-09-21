console.log("2-qadam");

import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
// import router from "./router";
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "session",
});

// kirish
const app = express();
console.log("_dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

// sessions

app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 6, //3h
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(function(req,res, next) {
  const sessioInstance = req.session as T ;
  res.locals.member = sessioInstance.member;
  next();
})

//view
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//router
app.use("/admin", routerAdmin);
app.use("/", router); //Middleware design pattern

export default app;
