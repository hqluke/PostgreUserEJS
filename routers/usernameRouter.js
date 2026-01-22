const express = require("express");
const userController = require("../controllers/usernameController");
const userRouter = express.Router();

userRouter.get("/", userController.getUsernames);
userRouter.get("/new", userController.createUsernameGet);
userRouter.post("/new", userController.createUsernamePost);
userRouter.post("/search", userController.getUsername);
userRouter.get("/delete", userController.deleteAllUsernames);

module.exports = userRouter;
