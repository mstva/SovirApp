import express from "express";
import { RegisterUser, LoginUser, GetUsers } from "../controllers/UserController.js";
import {isRequestValidated, RegisterValidateRequest, LoginValidateRequest} from "../validators/UserValidator.js";

export const UserRouter = express.Router()

UserRouter.post('/register',RegisterValidateRequest, isRequestValidated, RegisterUser)

UserRouter.post('/login', LoginUser)

UserRouter.get('/users', GetUsers)