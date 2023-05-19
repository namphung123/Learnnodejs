import express from "express";
import { getHomePage } from "../controllers/homeController";
import { getDetailPage } from "../controllers/homeController";

let router = express.Router();

const initWebRouter = (app) => {
  router.get("/", getHomePage);
  router.get("/detail/user/:id", getDetailPage);

  router.get("/about", (req, res) => {
    res.send("Hello World");
  });

  return app.use("/", router);
};

export default initWebRouter;
