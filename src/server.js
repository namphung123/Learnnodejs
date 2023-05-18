// const express = require("express");
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./route/web";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

//config app
configViewEngine(app);

//init app
initWebRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
