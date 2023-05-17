import { Router } from "express";
import { userCreate } from "../controllers";

const router = Router();

router.post('/register', userCreate);

export default router;
