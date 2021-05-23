import express from "express";


const userRouter = express.Router();

userRouter.get("/edit", handleEditUser);
userRouter.get("/delete", handleDelete);


export default userRouter;
