import express from "express";
import {
    getAccountByCodeData,
    getAllAccountsData
} from "../controllers/account.js";

const router = express.Router();

router.get('/', getAllAccountsData);
router.get("/:code", getAccountByCodeData);


export default router;