import { Router } from "express";
import UserController from "./src/controllers/UserController";

const router = Router();

const userController = new UserController();

router.post('/user/registration', (req, res) => {
    userController.create(req, res);
  });
router.post('/user/login', (req, res) => {
  userController.checkLogin(req, res);
});

export default router;