import express from "express";
import { getAllAccountsData } from "../controllers/account.js";

const router = express.Router();

router.get('/', getAllAccountsData);


export default router;