require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const usernameRouter = require("./routers/usernameRouter.js");

const path = require("path");
const ejs = require("ejs");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "views")));
app.use(express.urlencoded({ extended: true }));
app.use("/", usernameRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
