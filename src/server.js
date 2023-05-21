// const express = require("express");
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./route/web";
import initAPIRoute from "./route/api";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//set up view engine
configViewEngine(app);

//init web router
initWebRouter(app);

//int apit router
initAPIRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
