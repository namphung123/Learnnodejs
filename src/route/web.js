import express from "express";
import { getHomePage } from "../controllers/homeController";
import { getDetailPage } from "../controllers/homeController";
import { createNewUser } from "../controllers/homeController";
import { editUser } from "../controllers/homeController";
import { deleteUser } from "../controllers/homeController";
import { updateUser } from "../controllers/homeController";

let router = express.Router();

const initWebRouter = (app) => {
  router.get("/", getHomePage);
  router.get("/detail/user/:id", getDetailPage);

  router.post("/create-new-user", createNewUser);
  router.post("/delete-user", deleteUser);

  router.get("/edit-user/:id", editUser);
  router.post("/update-user", updateUser);

  router.get("/about", (req, res) => {
    res.send("Hello World");
  });

  return app.use("/", router);
};

export default initWebRouter;
