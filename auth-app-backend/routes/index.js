import { signup, signin } from "../authController/authController.js";
import Router from "express";

const router = Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
export default router;
