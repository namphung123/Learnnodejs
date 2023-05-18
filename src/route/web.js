import express from "express";
import { getHomePage } from "../controllers/homeController";

let router = express.Router();

const initWebRouter = (app) => {
  router.get("/", getHomePage);

  router.get("/about", (req, res) => {
    res.send("Hello World");
  });

  return app.use("/", router);
};

export default initWebRouter;
